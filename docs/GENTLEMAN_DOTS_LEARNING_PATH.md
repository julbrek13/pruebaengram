# Integración Gentleman.Dots en la curva de aprendizaje

Guía curricular para integrar **Gentleman.Dots** como base práctica del curso **GentleAI + SDD Orchestrator + Engram + Git**.

La idea no es “instalar dotfiles y listo”. Eso sería consumo pasivo. La idea es usar `.dots` como **laboratorio profesional**: editor, terminal, shells, multiplexores, AI layer y memoria persistente trabajando juntos para entrenar criterio técnico.

---

## 1) Modelo mental

| Capa | Proyecto | Qué aporta al aprendizaje |
|---|---|---|
| Entorno de trabajo | `Gentleman.Dots` | Neovim, terminales, shells, Tmux/Zellij, instalador y hábitos de navegación |
| Capa de IA | `gentle-ai` | Engram, SDD, skills, agentes, routing, persona y documentación viva |
| Contrato de agentes | `AGENTS.md` | Instrucciones estables para agentes que entran al repo |
| Curso/práctica | `pruebaengram` | Ejercicios, decisiones, trazabilidad, mini-proyectos y evaluación progresiva |

**Regla:** Gentleman.Dots te da el taller; gentle-ai te da método, memoria y agentes; `AGENTS.md` fija el contrato operativo; este repo convierte todo eso en entrenamiento progresivo.

---

## 2) Curva de aprendizaje sugerida

> Duraciones orientativas. Si un concepto no se entiende, se frena. La velocidad no manda; manda la comprensión.

| Etapa | Tiempo sugerido | Foco | Resultado esperado |
|---|---:|---|---|
| 0. Instalación consciente | 1-2 sesiones | Entender qué instala `.dots` y qué queda para `gentle-ai` | Podés explicar la separación entorno vs IA |
| 1. Supervivencia terminal | 3-5 sesiones | Shell, terminal emulator, rutas, comandos básicos, Git status/diff/log | No dependés de la UI para moverte |
| 2. Neovim productivo | 2-3 semanas | LazyVim, navegación, buffers, LSP, búsqueda, keymaps | Editás sin pelearte con la herramienta |
| 3. Multiplexing real | 1 semana | Tmux/Zellij, panes, sesiones, workspace por proyecto | Trabajás con contexto estable por tarea |
| 4. Engram operativo | 1 semana | `mem_context`, `mem_search`, `mem_get_observation`, `mem_save`, summaries | No perdés decisiones ni aprendizajes |
| 5. SDD aplicado | 2-4 semanas | no-SDD, parcial-SDD, full-SDD según riesgo | Elegís proceso por criterio, no por ansiedad |
| 6. Skills y mejora continua | continuo | crear/refinar skills, conventions y guías | El sistema aprende con vos |
| 7. Contrato AGENTS.md | continuo | instrucciones estables para agentes, testing, PR y memoria | Los agentes entran al repo sin improvisar reglas |

---

## 3) Guías necesarias por etapa

### Etapa 0 — Instalación consciente

**Objetivo:** instalar y entender responsabilidades.

Lecturas/prácticas:

- `README.md` de Gentleman.Dots: herramientas, plataformas y quick start.
- `docs/gentlaireadme/components.md`: componentes de gentle-ai.
- `docs/SDD_ENGRAM_OPERATING_MODEL.md`: modelo decision-first.

Checklist:

- [ ] Explicar en 2 frases qué hace Gentleman.Dots.
- [ ] Explicar en 2 frases qué hace gentle-ai.
- [ ] Identificar qué herramienta resuelve editor, shell, terminal, memoria y workflow.
- [ ] Guardar decisión inicial en Engram con `topic_key: course/dots/foundation`.

Done criteria:

- No confundís dotfiles con capa de IA.
- Podés explicar por qué primero se configura el taller y después los agentes.

---

### Etapa 1 — Supervivencia terminal

**Objetivo:** dejar de depender de comandos copiados sin entender.

Guías a crear/usar:

- Guía de shell elegido: Fish, Zsh o Nushell.
- Guía de terminal emulator elegido: Ghostty, Kitty, WezTerm o Alacritty.
- Guía mínima Git: `status`, `diff`, `log`, `branch`, `commit`.

Prácticas:

- [ ] Abrir repo desde terminal.
- [ ] Revisar estado con Git antes de pedir cambios.
- [ ] Navegar carpetas sin explorador gráfico.
- [ ] Ejecutar scripts del proyecto y explicar salida.

Done criteria:

- Antes de tocar archivos, sabés dónde estás y qué cambió.
- Podés recuperar el estado del repo sin preguntarle a la IA.

---

### Etapa 2 — Neovim productivo

**Objetivo:** usar Neovim como herramienta de pensamiento, no como adorno.

Guías a crear/usar:

- Keymaps base de Gentleman.Dots.
- LSP/autocomplete/diagnostics.
- Búsqueda y navegación de proyecto.
- Vim Mastery Trainer incluido en Gentleman.Dots.

Prácticas:

- [ ] Completar módulos iniciales del Vim Mastery Trainer.
- [ ] Navegar archivos con búsqueda, no con mouse mental.
- [ ] Saltar a definición/referencias con LSP.
- [ ] Editar tests y código sin romper flujo.

Done criteria:

- Neovim deja de ser fricción y se vuelve palanca.
- Usás movimientos y text objects de forma intencional.

---

### Etapa 3 — Multiplexing real

**Objetivo:** sostener una sesión profesional por proyecto.

Guías a crear/usar:

- Tmux/Zellij: sesiones, panes, tabs/layouts.
- Convención de workspace por repo.
- Flujo editor + tests + agente + shell.

Prácticas:

- [ ] Un pane para editor.
- [ ] Un pane para tests o comandos.
- [ ] Un pane para agente/IA.
- [ ] Una sesión nombrada por proyecto o TP.

Done criteria:

- Podés cerrar y retomar sin perder orientación.
- Tu entorno refleja tu tarea actual.

---

### Etapa 4 — Engram operativo

**Objetivo:** transformar sesiones aisladas en aprendizaje acumulativo.

Guías a usar:

- `docs/ENGRAM_RECOVERY_RUNBOOK.md`
- `docs/ENGRAM_CONTEXT_MAP.md`
- `docs/MATRIZ_TRAZABILIDAD_CURSO.md`

Prácticas:

- [ ] Inicio de sesión: `mem_context`.
- [ ] Recuperación temática: `mem_search` + `mem_get_observation`.
- [ ] Guardado de decisión: `mem_save` con `What/Why/Where/Learned`.
- [ ] Cierre: `mem_session_summary`.

Topic keys sugeridas:

- `course/dots/foundation`
- `course/dots/neovim`
- `course/dots/shell`
- `course/dots/multiplexer`
- `course/dots/ai-layer`
- `course/dots/progress`

Done criteria:

- Cada decisión importante queda recuperable.
- Podés explicar qué aprendiste la sesión anterior sin depender del chat.

---

### Etapa 5 — SDD aplicado sobre Gentleman.Dots/gentle-ai

**Objetivo:** elegir proceso según riesgo.

Ejemplos de modo:

| Caso | Modo |
|---|---|
| Agregar nota de aprendizaje a una guía | no-SDD |
| Crear guía nueva de Neovim o shell | parcial-SDD |
| Rediseñar estructura curricular completa | full-SDD |
| Crear una skill nueva reutilizable | parcial-SDD o full-SDD según impacto |

Prácticas:

- [ ] Justificar modo antes de ejecutar.
- [ ] Usar pipeline parcial para guías medianas.
- [ ] Usar full-SDD para cambios transversales del curso.
- [ ] Archivar aprendizajes en Engram.

Done criteria:

- No usás SDD como burocracia.
- Tampoco improvisás cambios grandes sin especificar.

---

### Etapa 6 — Skills y mejora continua

**Objetivo:** que el sistema capture tu forma de trabajar y la vuelva reusable.

Guías a crear/usar:

- Skill authoring.
- Registry de skills.
- AGENTS.md como contrato operativo de repo.
- Convenciones de curso.
- Retro de sesiones.

Prácticas:

- [ ] Detectar una convención repetida.
- [ ] Convertirla en skill solo si aplica a futuras sesiones.
- [ ] Decidir si una regla pertenece a `AGENTS.md`, skill, docs o Engram.
- [ ] Actualizar registry.
- [ ] Guardar el porqué en Engram.

Done criteria:

- El ecosistema no solo te asiste: mejora con tu experiencia.

---

## 4) Integración con mini-proyectos del curso

Agregar un cuarto pilar transversal:

### PILAR 4 — ENTORNO PROFESIONAL CON `.dots`

| ID | Modo | Objetivo | Evidencia |
|---|---|---|---|
| DOTS-0 | no-SDD | instalar/entender separación `.dots` vs `gentle-ai` | nota Engram `course/dots/foundation` |
| DOTS-1 | no-SDD | supervivencia terminal + Git básico | checklist de sesión sin ayuda |
| DOTS-2 | parcial-SDD | guía personal de Neovim productivo | doc/nota + práctica Vim Trainer |
| DOTS-3 | parcial-SDD | workspace Tmux/Zellij por proyecto | sesión reproducible documentada |
| DOTS-4 | full-SDD | rediseñar flujo de trabajo completo editor + AI + memoria | artefactos SDD + verify/archive |
| AGENTS-0 | no-SDD | entender `AGENTS.md` como README para agentes | nota Engram `course/agents-md/foundation` |
| AGENTS-1 | parcial-SDD | auditar instrucciones del repo | checklist Obsidian + Engram `course/agents-md/audit` |

---

## 5) Evaluación de progreso

Preguntas de control:

1. ¿Puedo explicar qué parte resuelve Gentleman.Dots y qué parte resuelve gentle-ai?
2. ¿Puedo trabajar 30 minutos sin perderme entre terminal, editor y repo?
3. ¿Puedo recuperar decisiones previas con Engram?
4. ¿Puedo justificar cuándo uso no-SDD, parcial-SDD o full-SDD?
5. ¿Puedo convertir una repetición real en una skill útil?

Si la respuesta es “no”, no pasa nada. Se vuelve a la etapa correspondiente. Esto es entrenamiento, no teatro.

---

## 6) Seguimiento visual con Obsidian

El seguimiento del curso puede abrirse como vault independiente en:

- `docs/ObsidianVaults-GentleAI-Course/`

La estructura toma como referencia el vault de ciberseguridad de `docs/ObsidianVaults/`, pero separa este curso para no mezclar dominios. La arquitectura usa capas numeradas:

- `00-HQ/`: dashboards, trazabilidad y punto de entrada.
- `20-KNOWLEDGE/`: conceptos atómicos enlazables.
- `30-PRACTICE/`: tracks DOTS/GE/TP/EN.
- `40-EVIDENCE/`: evidencia repo + Engram + PR.
- `90-AUTOMATION/`: runbooks y checks.

### Uso recomendado del graph

- Filtrar por `#status/doing` para ver foco actual.
- Filtrar por `#pillar/dots`, `#pillar/git`, `#pillar/engram` para estudiar por pilar.
- Filtrar por `#evidence/engram` para validar qué aprendizajes tienen memoria persistente.
- Revisar notas huérfanas semanalmente: una nota sin enlaces suele ser conocimiento no integrado.

### Regla de integración

Obsidian conecta ideas. Git prueba cambios. Engram preserva decisiones. Si una práctica no aparece en los tres cuando corresponde, falta trazabilidad.

### Nodo obligatorio: AGENTS.md

El vault incluye [[agents-md-contract]] y [[AGENTS-MD-TRACKER]] para que el contrato operativo de agentes sea parte visible del grafo, no una regla escondida.

---

## 7) Herramientas externas complementarias

Obsidian alcanza para el grafo personal del curso. No conviene sumar herramientas por ansiedad; se suman cuando resuelven un límite concreto.

| Herramienta | Cuándo usarla | Tradeoff |
|---|---|---|
| GitHub Projects | Si necesitás kanban real para issues/PRs del curso | Excelente para ejecución, pobre para conocimiento nodal |
| Excalidraw en Obsidian | Para dibujar arquitecturas, flujos SDD o mapas mentales | Visual potente, puede volverse dibujo sin evidencia |
| Kanban plugin de Obsidian | Para seguimiento liviano dentro del vault | Útil, pero no reemplaza GitHub Issues/PRs |
| Anki | Para memorizar comandos, conceptos y patrones | Muy bueno para repetición espaciada, malo para trazabilidad de proyecto |
| Logseq | Alternativa outline-first a Obsidian | Mejor diario/outliner, menos alineado si ya elegiste vault Obsidian |

Recomendación: empezar con **Obsidian + GitHub + Engram**. Agregar Anki solo para memorización deliberada y Excalidraw solo cuando un concepto necesite diagrama.

---

## 8) Regla de oro

`.dots` no es decoración. Es infraestructura de aprendizaje.

Si una herramienta no mejora comprensión, trazabilidad o velocidad con criterio, todavía no la dominaste: solo la instalaste.
