# Privacidad y Tratamiento de Datos

> `⚖️ requiere counsel review` en todo el documento. Modelo de compliance, no asesoría legal.
> Normas de referencia: Ley 25.326, Decreto 1558/2001, guía AAIP `🔎 source to verify`.

## Categorías de datos

| Categoría | Ejemplos | Riesgo |
|---|---|---|
| No personales | Métricas agregadas, config no sensible | Bajo |
| Personales | Nombre, email, identificadores de usuario | Medio-Alto |
| Sensibles | Datos especialmente protegidos (⚖️ definición legal) | **Alto** |

`⚖️` — la clasificación exacta de "dato sensible" la determina el marco legal argentino.

## Roles del tratamiento

- Responsable del tratamiento vs. encargado del tratamiento (terminología a confirmar con counsel).
- Documentar quién decide fines y medios del tratamiento en cada repo.

## Principios de referencia (modelo)

- **Minimización**: recolectar solo lo necesario.
- **Base legal**: identificar la base del tratamiento `⚖️`.
- **Exclusión de secretos**: nunca mezclar datos personales con secretos/infra.
- **Propósito**: uso limitado al fin declarado.

## Transferencia internacional de datos

- Riesgo **Alto**. `⚖️ requiere counsel review` — condiciones y garantías para transferencia
  fuera de Argentina.
- Relevante si algún repo usa proveedores/infra fuera del país.

## Aplicación por repo (resumen)

| Repo | Exposición a datos personales |
|---|---|
| `qontera-web` | Media (forms / analytics) |
| `qontera-admin-wb` | Media (metadata sanitizada read-only) |
| `qontera-app` | **Alta** (datos de usuario) |
| `qontera-platform-infrastructure` | Alta (config / almacenamiento) |
| `claude-code-config` | Baja (config, no runtime) |

## Checklist mínima

- [ ] Categorías de datos identificadas.
- [ ] Base legal del tratamiento definida (⚖️).
- [ ] Minimización aplicada.
- [ ] Transferencia internacional evaluada (⚖️).
- [ ] Secretos excluidos de todo dataset.

## Preguntas para counsel

1. ¿Alguna base de datos personales requiere registro ante la autoridad?
2. ¿Qué garantías se necesitan para transferencia internacional?
