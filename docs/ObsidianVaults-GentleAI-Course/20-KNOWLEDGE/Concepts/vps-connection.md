---
tags: [concept, pillar/agent-harnesses, status/todo]
type: concept
---

# VPS Connection

## Idea central

Conectar una VPS en un proyecto profesional no es “entrar por SSH”. Es operar una infraestructura con contratos: usuarios, claves, rutas, reverse proxy, deploy manual, validación pública y memoria de decisiones.

## Caso real Qontera

Fuente de referencia: `docs/VPS_CONNECTION_COURSE_INTEGRATION.md`.

Patrón observado:

- Hostinger KVM 2 + Ubuntu 24.04.
- Nginx como frontera pública.
- `/opt/qontera/<service>` como layout runtime.
- `deploy` como usuario operacional.
- deploy keys y aliases SSH por repo privado.
- deploy manual antes de CI/CD.
- Engram Cloud con espacios separados por proyecto.
- runbook anidado provisioning → SSH → deploy user → Nginx → TLS → Engram Cloud.

## Preguntas que el alumno debe poder responder

- ¿Por qué no operar siempre como `root`?
- ¿Por qué una deploy key por repo?
- ¿Qué valida Nginx que no valida `npm run build`?
- ¿Por qué automatizar CI/CD antes de entender el deploy manual es peligroso?
- ¿Por qué Engram Cloud comparte infraestructura pero no contexto?

## Evidencia esperada

- Diagrama `GitHub → VPS path → build → Nginx → dominio`.
- Diagrama `orquestador → ENGRAM_PROJECT → Engram Cloud → Postgres`.
- Checklist sin secretos.
- Memoria Engram `course/vps-connection/foundation`.

## Enlaces

- [[agent-harnesses]]
- [[engram-memory]]
- [[engram-cloud-vps]]
- [[AGENT-HARNESSES-TRACKER]]
- [[EVIDENCE-REGISTER]]
