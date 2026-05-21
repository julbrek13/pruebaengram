# VPS + Engram Cloud — Runbook curricular anidado

Este runbook sintetiza el proceso real de Qontera para conectar una VPS y montar/operar Engram Cloud como backend de memoria para múltiples orquestadores.

Fuente real:

- `/home/maca/qontera-platform-infrastructure/docs/provisioning-from-zero.md`
- `/home/maca/qontera-platform-infrastructure/docs/vps-bootstrap.md`
- `/home/maca/qontera-platform-infrastructure/docs/deploy-user.md`
- `/home/maca/qontera-platform-infrastructure/docs/nginx.md`
- `/home/maca/qontera-platform-infrastructure/docs/engram-cloud.md`
- `/home/maca/qontera-platform-infrastructure/scripts/engram-cloud-*.sh`

## Idea central

La conexión a una VPS y el montaje de Engram Cloud no son una lista de comandos. Son una **secuencia de decisiones operativas anidadas**:

```text
Proveedor/OS
  → SSH seguro
    → usuario deploy
      → layout /opt/qontera
        → Nginx + TLS
          → apps estáticas / servicios internos
            → Engram Cloud en loopback + Nginx HTTPS
              → espacios de memoria por repo/orquestador
                → operación online/offline sin destruir datos
```

## Mapa mental por capas

| Capa | Pregunta | Decisión Qontera | Evidencia |
|---|---|---|---|
| Provisioning | ¿Existe una VPS alcanzable? | Hostinger KVM 2 + Ubuntu 24.04 LTS | `provisioning-from-zero.md`, `vps-current-state.md` |
| Acceso | ¿Quién puede entrar? | SSH con claves, no secretos en chat/repo | `deploy-user.md` |
| Operación | ¿Con qué usuario se despliega? | `deploy`, no `root` para operación normal | `deploy-user.md` |
| Layout | ¿Dónde vive cada cosa? | `/opt/qontera/{web,admin,app,infra,shared,backups,logs}` | `vps-bootstrap.md` |
| Frontera pública | ¿Quién expone HTTP/HTTPS? | Nginx | `nginx.md` |
| Deploy | ¿Cómo se publica primero? | manual-first, scripts luego | `deployment.md` |
| Memoria cloud | ¿Dónde persiste Engram? | `/opt/qontera/engram` + Docker Compose | `engram-cloud.md` |
| Exposición Engram | ¿Cómo se accede? | Nginx + HTTPS, app en `127.0.0.1:18080` | `engram-cloud.md` |
| Contextos | ¿Cómo no mezclar memorias? | `ENGRAM_PROJECT` por repo/orquestador | `engram-cloud.md` |
| Pausa/reactivación | ¿Cómo apagar sin borrar datos? | scripts online/offline, nunca `down -v` | `engram-cloud-*.sh` |

## Flujo 1 — Conexión VPS desde cero

### 1. Decidir antes de comprar

Decisiones base Qontera:

- Provider: Hostinger.
- Plan: KVM 2.
- OS: Ubuntu 24.04 LTS.
- Topología: single-node inicial.
- Reverse proxy: Nginx.

Pregunta docente: ¿por qué una VPS simple primero y no Kubernetes/CI/CD/Docker-first?

Respuesta: porque la infraestructura debe ser entendida antes de ser automatizada.

### 2. Crear VPS y registrar realidad

Registrar sin secretos:

- provider;
- plan;
- hostname;
- OS;
- IPv4;
- estado Docker si existe;
- acceso inicial.

No registrar:

- root password;
- private keys;
- tokens;
- panel credentials.

### 3. Preparar SSH local

Cada developer debe tener su par de claves local.

Seguro de compartir:

```text
id_ed25519.pub
```

Nunca compartir:

```text
id_ed25519
```

### 4. Primer login

El primer login puede ser como `root` por necesidad de provisioning:

```bash
ssh root@<vps-ip>
```

Pero esto es transitorio. La operación normal pasa a `deploy`.

### 5. Crear usuario deploy

Objetivo: separar administración inicial de operación diaria.

```bash
sudo ./scripts/create-deploy-user.sh
```

Luego agregar solo claves públicas a:

```text
/home/deploy/.ssh/authorized_keys
```

### 6. Bootstrap base del servidor

Orden conceptual:

1. actualizar sistema;
2. instalar paquetes base;
3. instalar Node LTS;
4. crear layout `/opt/qontera`;
5. configurar firewall;
6. instalar Nginx sites;
7. validar `nginx -t`;
8. recién después pensar en TLS/deploy.

### 7. Nginx y TLS

Nginx es la frontera pública. La regla es:

```text
No recargar Nginx si nginx -t falla.
No pedir TLS si DNS no apunta al VPS.
```

## Flujo 2 — Deploy manual de Admin/Web/App

### 1. Clonar repos en layout runtime

Rutas Qontera:

```text
/opt/qontera/web
/opt/qontera/admin
/opt/qontera/app
/opt/qontera/infra
```

### 2. Respetar deploy keys por repo

El patrón correcto es un alias SSH por repo privado:

```sshconfig
Host github.com-qontera-admin
  HostName github.com
  User git
  IdentityFile ~/.ssh/qontera_admin_deploy
  IdentitiesOnly yes
```

Esto limita blast radius: una clave de Admin no debería leer Web/App si no corresponde.

### 3. Ejecutar script de deploy

Admin usa:

```bash
/opt/qontera/infra/scripts/deploy-admin.sh
```

Contrato del script:

1. clonar si falta;
2. validar remote/alias;
3. pull `--ff-only`;
4. `npm ci`;
5. `npm run build`;
6. validar `dist/index.html`.

### 4. Validar desde afuera

Deploy no termina en build. Termina con validación pública:

```bash
curl -I https://admin.qonteragroup.com
curl -s https://admin.qonteragroup.com | grep -E 'canonical|og:url'
```

## Flujo 3 — Montaje conceptual de Engram Cloud

### 1. Definir rol de Engram Cloud

Engram Cloud no es “otro dashboard”. En Qontera es el backend de memoria para orquestadores autónomos.

Objetivo:

```text
misma infraestructura → espacios de memoria separados
```

### 2. Definir runtime baseline

Qontera define:

| Concern | Valor |
|---|---|
| URL pública | `https://engram.qonteragroup.com` |
| VPS path | `/opt/qontera/engram` |
| Nginx site | `engram.qonteragroup.com.conf` |
| Listener interno | `127.0.0.1:18080` |
| Containers | `qontera-engram-cloud`, `qontera-engram-postgres` |
| Healthcheck | `/health` |
| Dashboard | `/dashboard/login` |

Regla: la app escucha en loopback; Nginx expone HTTPS.

### 3. Separar espacios por repo/orquestador

Espacios actuales:

| Engram project | Repo | Orquestador |
|---|---|---|
| `qontera-web` | `qontera-web` | Web |
| `qontera-admin-wb` | `qontera-admin-wb` | Admin |
| `qontera-app` | `qontera-app` | App |
| `qontera-platform-infrastructure` | `qontera-platform-infrastructure` | Infra |

Regla crítica:

```text
El token autentica. El project separa contexto.
```

### 4. Configurar cliente sin commitear secretos

Contrato conceptual:

```bash
ENGRAM_CLOUD_SERVER=https://engram.qonteragroup.com
ENGRAM_CLOUD_TOKEN=<stored outside git>
ENGRAM_PROJECT=qontera-admin-wb
```

Nada de tokens en repo, docs, issues, PRs o chat.

### 5. Operar disponibilidad sin destruir datos

Engram Cloud tiene tres estados pedagógicos:

| Estado | Significado | Datos |
|---|---|---|
| `online` | containers + ruta pública | preservados |
| `public-offline` | ruta Nginx deshabilitada, containers pueden seguir | preservados |
| `stopped` | ruta deshabilitada + containers detenidos | volúmenes preservados |

Scripts:

```bash
/opt/qontera/infra/scripts/engram-cloud-status.sh
/opt/qontera/infra/scripts/engram-cloud-offline.sh
/opt/qontera/infra/scripts/engram-cloud-online.sh
```

Si se quiere detener containers sin borrar datos:

```bash
/opt/qontera/infra/scripts/engram-cloud-offline.sh --stop-containers
/opt/qontera/infra/scripts/engram-cloud-online.sh
```

Regla de oro:

```text
Nunca usar docker compose down -v para pausa/reactivación normal.
```

### 6. Validar salud

Después de reactivar:

```bash
curl -I https://engram.qonteragroup.com/health
curl -I https://engram.qonteragroup.com/dashboard/login
```

## Cómo lo ve el orquestador AdminWeb

El orquestador de AdminWeb no “posee” la infraestructura. La consume y la valida desde su frontera:

- Admin se despliega en `/opt/qontera/admin`.
- Admin se expone por `admin.qonteragroup.com`.
- Admin puede en el futuro mostrar metadata operacional de Engram Cloud.
- Admin NO debe mezclar memorias crudas de otros espacios.
- Las decisiones VPS/Nginx/Engram Cloud pertenecen al orquestador de infraestructura.

Regla docente:

```text
Admin mira metadata operacional; Infra decide y opera infraestructura.
```

## Práctica VPS-2 — Conexión anidada al VPS

Objetivo: explicar la secuencia completa sin ejecutar comandos reales.

Evidencia mínima:

- diagrama por capas;
- checklist provisioning → SSH → deploy user → Nginx → TLS;
- explicación de por qué root es transitorio;
- explicación de por qué deploy keys son por repo;
- memoria `course/vps-connection/nested-runbook`.

## Práctica EC-0 — Engram Cloud en VPS

Objetivo: entender Engram Cloud como memoria compartida con contextos aislados.

Evidencia mínima:

- diagrama `orquestador → ENGRAM_PROJECT → Engram Cloud → Postgres`;
- tabla de espacios por repo;
- explicación token vs project;
- explicación online/offline/stopped;
- memoria `course/engram-cloud-vps/foundation`.

## Antipatrones

- Pegar secretos en chat para “avanzar rápido”.
- Usar root como deploy permanente.
- Saltar `nginx -t`.
- Exponer dashboards antes de TLS/UFW.
- Mezclar memoria de todos los repos en un `project` genérico.
- Borrar volúmenes Postgres al “apagar” Engram Cloud.
- Hacer CI/CD antes de que el deploy manual sea entendible.

## Regla de oro

Infraestructura profesional es una cadena de confianza. Si no podés explicar cada eslabón, no estás automatizando: estás apostando.
