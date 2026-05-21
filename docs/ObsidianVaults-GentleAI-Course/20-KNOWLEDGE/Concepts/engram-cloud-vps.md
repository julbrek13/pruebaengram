---
tags: [concept, pillar/agent-harnesses, pillar/engram, status/todo]
type: concept
---

# Engram Cloud on VPS

## Idea central

Engram Cloud en Qontera es una memoria compartida a nivel infraestructura, pero con contextos separados por `project`.

```text
orquestador → ENGRAM_PROJECT → Engram Cloud → Postgres
```

## Runtime Qontera

- URL pública: `https://engram.qonteragroup.com`
- VPS path: `/opt/qontera/engram`
- Nginx site: `engram.qonteragroup.com.conf`
- Listener interno: `127.0.0.1:18080`
- Containers: `qontera-engram-cloud`, `qontera-engram-postgres`

## Frontera de contexto

El token autentica. El `project` separa memoria.

| Project | Orquestador |
|---|---|
| `qontera-web` | Web |
| `qontera-admin-wb` | Admin |
| `qontera-app` | App |
| `qontera-platform-infrastructure` | Infra |

## Estados operativos

- `online`: containers + ruta pública.
- `public-offline`: Nginx deshabilitado, datos preservados.
- `stopped`: containers detenidos, volúmenes preservados.

Regla crítica: nunca usar `docker compose down -v` para pausa/reactivación normal.

## AdminWeb boundary

Admin puede mostrar metadata operacional futura, pero no debe mezclar memorias crudas de otros espacios.

## Enlaces

- [[vps-connection]]
- [[engram-memory]]
- [[agent-harnesses]]
- [[AGENT-HARNESSES-TRACKER]]
