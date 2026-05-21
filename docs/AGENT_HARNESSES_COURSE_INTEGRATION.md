# Agent Harnesses — Integración curricular

Este documento integra el concepto de **Agent Harnesses** al curso GentleAI/SDD/Engram como una capa de disciplina operativa, no como una lista de herramientas.

## Tesis

Un **Agent Harness** es el sistema que contiene al agente y le da forma profesional:

- interfaz de trabajo;
- reglas y contratos;
- memoria y recuperación;
- delegación y subagentes;
- visibilidad de estado;
- telemetry y costos;
- verificación y cierre con evidencia.

La idea importante para el curso es esta: **el modelo no alcanza**. Sin harness, el agente produce actividad; con harness, el equipo produce decisiones, evidencia y mejora continua.

## Despiece conceptual

| Capa | Pregunta | Herramientas / prácticas del curso | Riesgo si falta |
|---|---|---|---|
| Interfaz | ¿Dónde opero al agente? | OpenCode, Pi, terminal, editor | prompts sueltos sin contexto |
| Contrato | ¿Qué reglas gobiernan la sesión? | `AGENTS.md`, skills, PR templates | comportamiento inconsistente |
| Planificación | ¿Cómo decido antes de ejecutar? | SDD, proposal/spec/design/tasks | cambios impulsivos |
| Memoria | ¿Cómo recupero continuidad? | Engram, topic keys, session summaries | reiniciar desde cero |
| Delegación | ¿Quién hace qué trabajo? | subagentes, orchestrator, apply/verify | una IA haciendo todo sin separación |
| Visibilidad | ¿Sé qué están haciendo los subagentes? | `sub-agent-statusline`, trackers | delegaciones opacas |
| Medición | ¿El costo/calidad justifica el modelo? | `metronous`, benchmarks, thresholds | decisiones por sensación |
| Cierre | ¿Qué evidencia queda? | Git, PR, verify, archive, Engram | aprendizaje no transferible |

## Referencias integradas

### Pi / gentle-pi / gentle-engram

Usar como progresión de madurez:

1. **Pi**: harness terminal minimalista. Enseña la base: una interfaz controlada para trabajar con agentes.
2. **gentle-pi**: harness disciplinado. Agrega SDD/OpenSpec, subagentes, strict TDD evidence, review guardrails, shell safety, skills y model routing.
3. **gentle-engram**: harness con continuidad. Agrega memoria persistente, recuperación post-compaction y continuidad entre agentes/sesiones.

No hay que vender esto como “instalá X y listo”. El valor pedagógico es entender qué capacidad operacional agrega cada capa.

### Dudas reales de onboarding: Pi vs Claude Code vs OpenCode

Estas preguntas aparecen cuando alguien ya usa Claude Code, Engram MCP o gentle-ai y no entiende qué agrega Pi. El curso debe responderlas temprano:

| Duda | Respuesta docente | Riesgo si no se aclara |
|---|---|---|
| “Si ya tengo Engram + gentle-ai, ¿tengo lo mismo que gentle-pi?” | Tenés muchas capacidades del harness, pero no necesariamente el mismo runtime, gestor de packages/extensiones ni la misma libertad de composición. | confundir herramientas instaladas con runtime operativo |
| “¿Qué agrega Pi frente a Claude Code?” | Pi funciona como runtime/harness más minimalista y configurable; Claude Code es potente pero más cerrado y atado a su ecosistema/modelos. | migrar por moda o rechazar Pi sin entender tradeoffs |
| “¿Pi es mejor que OpenCode?” | No se enseña como “mejor”, sino como base más liviana y extensible. OpenCode puede traer más piezas de fábrica; Pi se parece más a un Neovim: arranca mínimo y se arma con packages. | comparar productos sin comparar filosofía |
| “¿Necesito tokens o suscripciones nuevas?” | Separar runtime, proveedor/modelo y suscripción. El curso debe enseñar a decidir según presupuesto y stack disponible. | bloquear el aprendizaje por no poder pagar otro proveedor |
| “¿Harness es solo un nombre nuevo?” | No: el concepto ordena capacidades que ya existían dispersas — contrato, memoria, SDD, subagentes, guardrails, telemetry y evidencia. | creer que harness es branding y no arquitectura operativa |

La analogía fuerte para principiantes: **Pi es como Neovim**. Viene más vacío, pero por eso mismo permite componer el entorno. Esa libertad exige criterio; si instalás packages sin entender qué resuelven, solo estás decorando la terminal.

### Plan mode, SDD y bloqueo de herramientas

Una duda frecuente es si un `/plan` o una extensión como `@porche/pi-plan-lock` se pisa con SDD. La respuesta conceptual:

- **Plan mode** es un guardrail de runtime: bloquea o limita tools de escritura para pensar sin modificar.
- **SDD** es un proceso de decisión: explore/proposal/spec/design/tasks/apply/verify/archive.
- **No compiten**: plan mode protege la sesión; SDD estructura el trabajo.

El curso debe enseñar esta diferencia con una práctica concreta: hacer una exploración read-only, escribir el plan, desbloquear ejecución y recién ahí aplicar. Esto responde al miedo real de principiantes: “pregunté algo y la IA se mandó sola a editar”.

### Troubleshooting inicial de Pi/gentle-pi

Los reportes de foro muestran problemas que conviene convertir en checklist docente:

- Windows puede abrir múltiples ventanas al iniciar cuando hay packages/gentle-pi/gentle-engram involucrados.
- Tmux/terminal/tamaño de pantalla pueden afectar scroll, banners, animaciones y experiencia TUI.
- Packages y startup pueden generar warnings o carga lenta; no asumir que todo bug es del modelo.
- Si Pi crea una issue o toca un repo equivocado, probablemente el problema fue permiso/contexto/lectura insuficiente del usuario: hay que enseñar a leer confirmaciones antes de aceptar.

Estos puntos no deben enseñarse como “Pi está mal”, sino como realidad profesional: un harness extensible también trae superficie de integración.

### SDD y pérdida de delegación correcta

Otra duda real: el agente principal entra en flujo SDD pero delega a workers genéricos en vez de `sdd-*`. El curso debe enseñar a diagnosticarlo sin adivinar:

1. verificar si se ejecutó `sdd-init`;
2. revisar si el pedido activó realmente flujo SDD o solo conversación sobre SDD;
3. confirmar que el orchestrator tenga reglas explícitas para delegar fases a `sdd-propose`, `sdd-spec`, `sdd-design`, `sdd-tasks`, `sdd-apply`, `sdd-verify`;
4. observar si al interactuar en medio del flujo el agente perdió el estado;
5. corregir con instrucción explícita o reinicio controlado del flujo.

La regla docente: **si el modo es SDD, el orquestador no “hace SDD con ganas”; delega fases a agentes SDD o explica por qué no puede**.

### `sub-agent-statusline`

Repositorio: <https://github.com/Joaquinvesapa/sub-agent-statusline>

**Qué es:** plugin TUI/sidebar para OpenCode que muestra subagentes en ejecución, completados, fallidos, tiempo transcurrido y uso de tokens/contexto cuando OpenCode lo expone.

**Qué enseña:** visibilidad operacional. Delegar no significa olvidarse. Un orquestador serio necesita saber:

- qué subagentes siguen corriendo;
- cuáles fallaron;
- cuánto tiempo llevan;
- qué sesión hija abrir para inspeccionar;
- qué señales de contexto/tokens están disponibles.

**Beneficio curricular máximo:** convertir la delegación en una práctica observable. El alumno debe aprender que “mandé dos subagentes” NO es evidencia; evidencia es poder reconstruir estado, resultado y costo contextual de esa delegación.

**Qué NO copiar ciegamente:** no reemplaza specs, verify ni Engram. Es una vista de estado, no una fuente de verdad histórica.

### `metronous`

Repositorio: <https://github.com/kiosvantra/metronous>

**Qué es:** telemetry, benchmarking y calibración local para agentes OpenCode. Captura sesiones, tool calls, tokens/costos, guarda en SQLite, muestra dashboards TUI y calcula benchmarks con thresholds.

**Qué enseña:** medición. Un equipo maduro no dice “este modelo se siente mejor”; mira datos:

- costo por sesión;
- errores/eventos;
- accuracy aproximada;
- ROI;
- sample size mínimo;
- thresholds de cambio;
- recomendaciones `KEEP`, `SWITCH`, `URGENT_SWITCH`, `INSUFFICIENT_DATA`.

**Beneficio curricular máximo:** introducir el concepto de calibración. Cada fase SDD puede requerir un perfil distinto: razonamiento caro donde aporta valor, modelo barato para tareas administrativas y cambio de modelo basado en evidencia.

**Qué NO copiar ciegamente:** telemetry no es verdad absoluta. Si la métrica está mal definida, solo automatiza una mala decisión. Primero se define qué significa “bueno” para el curso.

## Módulos propuestos

### AH-0 — Fundamentos de harness

Objetivo: diferenciar modelo, agente, orquestador y harness.

Evidencia mínima:
- explicación en 2 frases;
- mapa de capas del harness del curso;
- memoria `course/agent-harnesses/foundation`.

### AH-1 — Capas Pi / gentle-pi / gentle-engram

Objetivo: entender evolución de simplicidad a disciplina.

Evidencia mínima:
- tabla de capacidades;
- tradeoff simplicidad vs gobernanza;
- decisión de cuándo usar no-SDD/parcial/full.
- FAQ personal: qué gano/perdo si sigo en Claude Code/OpenCode vs migrar a Pi/gentle-pi.

### AH-2 — Visibilidad de subagentes

Objetivo: practicar delegación observable.

Evidencia mínima:
- dos subagentes paralelos con roles distintos;
- registro de estado/fallo/finalización;
- reflexión: qué se pudo ver y qué no.

### AH-3 — Telemetry y calibración

Objetivo: decidir con datos.

Evidencia mínima:
- definir thresholds;
- comparar costo/calidad por fase;
- justificar mantener o cambiar modelo.

### AH-4 — Circuito cerrado

Objetivo: integrar decisión, delegación, visibilidad, medición y memoria.

Evidencia mínima:
- SDD completo para un cambio real;
- Engram con decisiones y cierre;
- evidencia Git/PR;
- métricas o análisis de costo/calidad cuando estén disponibles.
- verificación de que las fases SDD delegaron a subagentes SDD y no a workers genéricos cuando correspondía.

## Criterio docente

El orden correcto no es instalar todo. El orden correcto es:

1. entender el problema operacional;
2. practicarlo manualmente;
3. introducir una herramienta cuando el dolor sea evidente;
4. medir si la herramienta mejora la práctica;
5. guardar el aprendizaje para que sobreviva a la sesión.

Es así de fácil y así de exigente: **herramienta sin criterio es decoración; harness con evidencia es disciplina profesional**.
