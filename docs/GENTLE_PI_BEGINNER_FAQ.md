# Gentle Pi — FAQ de principiantes para el curso

Este documento convierte dudas reales de foro en material docente para el curso GentleAI/SDD/Engram. No busca vender una herramienta: busca que el alumno entienda **qué problema operativo resuelve cada pieza**.

## 1) “¿Qué agrega Pi si ya uso Claude Code?”

Claude Code es un CLI potente, pero más cerrado al ecosistema Anthropic. Pi debe enseñarse como un runtime/harness más minimalista y componible: permite armar el entorno con packages, extensiones y reglas propias.

La pregunta correcta no es “¿cuál es mejor?”, sino:

- ¿necesito libertad de proveedores/modelos?
- ¿quiero controlar packages/extensiones?
- ¿mi suscripción actual ya resuelve mi caso?
- ¿el costo de migrar compensa el beneficio operativo?

## 2) “¿Pi es lo mismo que OpenCode?”

No exactamente. La analogía útil es:

- **OpenCode**: runtime más armado de fábrica.
- **Pi**: base más liviana, estilo Neovim, donde sumás lo que necesitás.
- **gentle-pi**: Pi con el stack de disciplina GentleAI encima.
- **gentle-engram**: continuidad/memoria sobre el flujo.

## 3) “Si ya tengo Engram + gentle-ai, ¿tengo lo mismo?”

Tenés parte importante del harness: memoria, skills, SDD, contratos. Pero Pi agrega otra dimensión: runtime configurable, packages/extensiones y control del entorno de ejecución.

No confundas **capacidades del harness** con **runtime donde corren esas capacidades**.

## 4) “¿Plan mode se pisa con SDD?”

No deberían pisarse porque resuelven problemas distintos:

- **Plan mode**: bloquea tools de escritura para pensar sin tocar archivos.
- **SDD**: estructura el proceso de decisión y ejecución.

Un buen flujo es:

1. activar plan/read-only;
2. explorar y diseñar;
3. confirmar dudas;
4. desactivar plan si corresponde;
5. aplicar con SDD o no-SDD según riesgo.

## 5) “¿Qué enseña `@porche/pi-plan-lock`?”

Enseña una idea fundamental de harness: **no alcanza con pedirle a la IA que no edite; el runtime debe poder bloquear herramientas**.

Según el reporte del foro, el modo plan:

- restringe tools a lectura;
- bloquea write/edit/bash/MCP;
- bloquea paths sensibles;
- agrega reglas anti-jailbreak;
- permite lock/unlock de sesión;
- muestra estado en footer.

La lección no es “instalá esto ya”; la lección es entender por qué un guardrail técnico vale más que una promesa en prompt.

## 6) “¿Por qué Pi abre ventanas raras en Windows?”

Puede estar relacionado con packages, gentle-pi/gentle-engram o integración runtime/terminal. El curso debe tratarlo como troubleshooting:

1. probar Pi limpio;
2. probar con packages;
3. comparar cantidad de ventanas con packages instalados;
4. registrar entorno: Windows, terminal, shell, tmux/no tmux;
5. no culpar al modelo sin aislar variables.

## 7) “¿Por qué la UI lagea, salta el scroll o la rosa molesta?”

Puede depender de terminal, tamaño, tmux y rendering TUI. Para principiantes, la práctica correcta es separar:

- problema de modelo;
- problema de runtime;
- problema de terminal;
- problema de configuración;
- problema de package.

## 8) “Estoy en SDD pero usa workers genéricos, ¿hice algo mal?”

No asumas. Verificá:

1. ¿corriste `sdd-init`?
2. ¿pediste SDD explícitamente o solo hablaste de SDD?
3. ¿el orchestrator tiene reglas para delegar a `sdd-*`?
4. ¿interactuaste a mitad del flujo y perdió el estado?
5. ¿hay un command/chain específico que sí delega correctamente?

Regla del curso: si entra en SDD, debe mantener contrato de fases. Si no puede, debe reportarlo y pedir corrección.

## 9) “¿Qué tengo que mirar en `pi list`?”

`pi list` sirve como inventario de capacidades. Para el curso, cada package debe clasificarse:

- memoria/contexto;
- subagentes/delegación;
- interacción usuario;
- web/lens/doc parsing;
- guardrails;
- notificaciones;
- extensiones experimentales.

Si no podés explicar qué problema resuelve un package, todavía no deberías depender de él.

## 10) Regla de oro para principiantes

No migres por ansiedad. Primero entendé tu flujo actual, identificá el dolor real y recién ahí agregá runtime, package o extensión.

**Herramienta sin criterio es decoración. Harness con guardrails, memoria y evidencia es disciplina profesional.**
