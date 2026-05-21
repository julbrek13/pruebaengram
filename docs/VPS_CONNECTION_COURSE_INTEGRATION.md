# Conexión a VPS — Integración curricular desde Qontera

Este documento integra al curso el caso real de conexión/orquestación VPS ya trabajado en Qontera. No enseña “conectarse por SSH y listo”; enseña a tratar una VPS como **superficie operacional gobernada por contratos, evidencia y límites de seguridad**.

## Fuente real analizada

Repositorios/contexto usados como referencia:

- `/home/maca/qontera-admin-wb`
- `/home/maca/qontera-platform-infrastructure`

Documentos clave del repo de infraestructura:

- `README.md`
- `docs/vps-current-state.md`
- `docs/deployment.md`
- `docs/engram-cloud.md`

## Tesis docente

Conectarse a una VPS profesionalmente no es “tener la IP y entrar”. Es un flujo con capas:

1. proveedor y sistema operativo verificados;
2. usuario operacional separado de `root`;
3. claves públicas y deploy keys sin exponer secretos;
4. rutas runtime previsibles;
5. reverse proxy explícito;
6. deploy manual primero;
7. validación HTTP pública;
8. memoria operacional separada por proyecto.

## Caso Qontera resumido

| Capa | Decisión Qontera | Lección para el curso |
|---|---|---|
| VPS | Hostinger KVM 2, Ubuntu 24.04 LTS | registrar estado real antes de operar |
| Reverse proxy | Nginx | una entrada pública controlada |
| Topología | single-node inicial | simple, pero reconocer SPOF |
| Usuario | `deploy` para operación normal | no vivir en `root` |
| Rutas | `/opt/qontera/<service>` | layout estable para scripts y recuperación |
| Repos | Web/Admin/App/Infra separados | límites de responsabilidad |
| Git access | deploy keys + alias SSH por repo | una clave no debe leer todo |
| Deploy | manual first | automatizar solo lo entendido |
| Admin | `/opt/qontera/infra/scripts/deploy-admin.sh` | script reproducible, no ritual oral |
| Engram Cloud | `engram.qonteragroup.com` | memoria compartida, espacios aislados |

## Flujo operativo enseñable

### 1. Verificar realidad antes de diseñar

Evidencia Qontera:

- proveedor: Hostinger;
- plan: KVM 2;
- OS: Ubuntu 24.04 LTS;
- Docker activo, pero no requerido para primer deploy estático;
- acceso inicial documentado;
- próximos pasos escritos.

Regla docente: **si no está escrito, no existe como operación confiable**.

### 2. Separar acceso humano, deploy y repositorios

El patrón correcto no es copiar una llave privada gigante al server. El patrón enseñable:

- cada repo privado usa deploy key propia;
- el usuario `deploy` tiene aliases SSH por repo;
- se valida cada alias antes de desplegar.

Ejemplo conceptual:

```sshconfig
Host github.com-qontera-admin
  HostName github.com
  User git
  IdentityFile ~/.ssh/qontera_admin_deploy
  IdentitiesOnly yes
```

El curso NO debe pedir ni guardar claves privadas. Solo puede documentar nombres, límites y validaciones.

### 3. Manual-first deploy

Qontera decidió desplegar manualmente antes de automatizar:

1. SSH al VPS con auth por clave.
2. Pull del repo en `/opt/qontera/<service>`.
3. `npm ci`.
4. `npm run build`.
5. verificar `dist/`.
6. validar respuesta HTTP detrás de Nginx.

Esto es pedagógicamente potente: **CI/CD sin flujo manual entendido es automatizar ignorancia**.

### 4. Nginx como frontera pública

La VPS puede tener procesos, contenedores o builds, pero la exposición pública debe pasar por Nginx y HTTPS. En Qontera, Admin se valida con:

```bash
curl -I https://admin.qonteragroup.com
curl -s https://admin.qonteragroup.com | grep -E 'canonical|og:url'
```

El curso debe enseñar que “el deploy terminó” recién cuando hay validación externa, no cuando el script no explotó.

### 5. Engram Cloud como memoria operacional

Qontera usa una instancia self-hosted de Engram Cloud con espacios por proyecto:

- `qontera-web`
- `qontera-admin-wb`
- `qontera-app`
- `qontera-platform-infrastructure`

Regla clave: **misma infraestructura, contextos separados**. El `project` de Engram es frontera de memoria; el token autentica, pero no reemplaza separación conceptual.

## Práctica propuesta: VPS-0

Objetivo: leer y explicar una conexión VPS existente sin tocar el servidor.

Evidencia mínima:

- identificar proveedor/OS/topología;
- explicar usuario `root` vs `deploy`;
- explicar por qué hay aliases SSH por repo;
- dibujar ruta `GitHub repo → VPS path → build → Nginx → dominio`;
- guardar aprendizaje en Engram con `topic_key: course/vps-connection/foundation`.

## Práctica propuesta: VPS-1

Objetivo: diseñar un runbook seguro para un deploy manual.

Evidencia mínima:

- checklist previo sin secretos;
- validación de alias SSH;
- validación de build estático;
- validación HTTP pública;
- rollback o pausa segura documentada;
- guardar aprendizaje en Engram con `topic_key: course/vps-connection/manual-deploy`.

## Práctica propuesta: VPS-2

Objetivo: explicar la conexión anidada completa al VPS desde provisioning hasta validación pública.

Guía: `docs/VPS_ENGRAM_CLOUD_COURSE_RUNBOOK.md`.

Evidencia mínima:

- diagrama provisioning → SSH → deploy user → `/opt/qontera` → Nginx → TLS;
- explicación de por qué `root` es transitorio;
- explicación de deploy keys/aliases por repo;
- validaciones necesarias antes de automatizar;
- guardar aprendizaje en Engram con `topic_key: course/vps-connection/nested-runbook`.

## Práctica propuesta: EC-0

Objetivo: comprender montaje y operación de Engram Cloud en VPS.

Guía: `docs/VPS_ENGRAM_CLOUD_COURSE_RUNBOOK.md`.

Evidencia mínima:

- diagrama `orquestador → ENGRAM_PROJECT → Engram Cloud → Postgres`;
- tabla de espacios por repo;
- diferencia entre token de acceso y frontera `project`;
- estados `online`, `public-offline`, `stopped`;
- regla “nunca `docker compose down -v` para pausa normal”;
- guardar aprendizaje en Engram con `topic_key: course/engram-cloud-vps/foundation`.

## Antipatrones

- Pedir contraseñas, tokens o private keys por chat.
- Usar `root` como usuario normal de operación.
- Automatizar GitHub Actions antes de probar manualmente.
- Mezclar infraestructura dentro de Web/Admin/App sin contrato.
- Tratar `curl -I` como opcional.
- Usar Engram Cloud como “memoria global mezclada” en vez de espacios aislados.

## Regla de oro

Una VPS no es una caja negra. Es una obra en construcción: planos, accesos, rutas, validaciones y bitácora. Sin eso, no tenés infraestructura; tenés una máquina con suerte.
