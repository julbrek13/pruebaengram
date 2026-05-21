# API Bridge — Integración curricular

Este documento integra **API Bridge** como patrón pedagógico para enseñar integración visual de APIs, data mapping y webhooks sin caer en “low-code mágico”.

Fuente analizada:

- Repo: <https://github.com/AlannFernandez/api-bridge>
- Demo: <https://api-bridge-one.vercel.app/editor>

## Tesis

API Bridge no debe estudiarse como “una app linda con React Flow”. Debe estudiarse como una respuesta a un problema real: el **glue code** que aparece cuando sistemas distintos necesitan comunicarse.

La idea valiosa es esta:

```text
flow config → execution engine → mapped response → webhook endpoint
```

Ese patrón conecta directamente con Qontera, Service Workspaces, Admin dashboard, integraciones de clientes y orquestadores.

## Qué problema enseña

| Dolor | Qué enseña API Bridge |
|---|---|
| APIs dispersas | modelar integraciones como flujo |
| REST/SOAP/legacy | normalizar protocolos distintos |
| glue code repetitivo | mover configuración a un grafo declarativo |
| CORS/proxy | centralizar ejecución controlada |
| transformaciones manuales | data mapper explícito |
| integración invisible | editor visual + logs |
| sistemas existentes | webhook URL como contrato de consumo |

## Capas pedagógicas

### 1. Canvas visual

El canvas enseña relaciones, no decoración. Un alumno debe poder explicar:

- qué nodo inicia el flujo;
- qué nodo llama una API;
- qué nodo transforma datos;
- qué salida se expone al consumidor.

### 2. Execution engine

El corazón no es la UI. El corazón es ejecutar un grafo en orden seguro y reproducible.

Preguntas docentes:

- ¿El flujo es secuencial o paralelo?
- ¿Qué pasa si un nodo falla?
- ¿Cómo se propaga un dato entre nodos?
- ¿Cómo se valida el output?
- ¿Cómo se audita una ejecución?

### 3. Data mapper

El mapper enseña contratos de datos:

- dot notation;
- templates tipo `{{node.name}}`;
- casteos;
- shape final;
- validación con schema.

Esto conecta con Zod, contratos entre repos y Service Workspaces.

### 4. Webhook output

La idea potente del prototipo es que el sistema pueda devolver una URL tipo webhook que responda el resultado mapeado.

Eso permite integrar sistemas existentes sin romper su flujo.

## Riesgos que el curso debe enseñar

API Bridge toca una superficie peligrosa: recibe configuración y ejecuta requests.

Antes de pensar en producción, hay que resolver:

- autenticación;
- autorización;
- vault de secrets;
- variables dinámicas seguras;
- SSRF;
- rate limiting;
- timeouts;
- allowlist de hosts;
- auditoría de ejecuciones;
- versionado de flows;
- rollback;
- tenant/workspace isolation;
- persistencia de configuración;
- testing del engine.

Regla docente: **si una herramienta puede llamar URLs arbitrarias, puede convertirse en una herramienta de ataque si no tiene límites**.

## Relación con Qontera

API Bridge encaja como inspiración para:

- integraciones visuales en Admin;
- Service Workspace builder;
- webhook mapper por cliente;
- normalización de respuestas externas;
- ejecución auditada de flujos;
- generación de contratos de integración.

No debe copiarse entero. Debe desestructurarse y extraer patrones.

## Práctica propuesta: AB-0

Objetivo: entender API Bridge como patrón, no como producto.

Evidencia mínima:

- dibujar `trigger → API call → transform → response`;
- explicar qué parte es UI y qué parte es engine;
- listar 5 riesgos de seguridad;
- guardar aprendizaje en Engram con `topic_key: course/api-bridge/pattern`.

## Práctica propuesta: AB-1

Objetivo: diseñar un contrato mínimo de flow seguro.

Evidencia mínima:

- schema de nodo;
- schema de edge;
- schema de variables permitidas;
- política de hosts permitidos;
- estrategia de logs sin secretos;
- guardar decisión en Engram con `topic_key: course/api-bridge/secure-flow-contract`.

## Práctica propuesta: AB-2

Objetivo: conectar el patrón con Qontera Service Workspaces.

Evidencia mínima:

- mapear un flow como contrato metadata-only;
- definir qué vive en Admin y qué vive en workspace/service;
- explicar cómo versionar el flow;
- guardar decisión en Engram con `topic_key: course/api-bridge/qontera-service-workspaces`.

## Anti-patrón

“Hago un editor visual y ya tengo plataforma de integraciones”. No. Tenés una UI. La plataforma aparece cuando hay contratos, seguridad, ejecución determinística, observabilidad y rollback.

## Decisión curricular

API Bridge sí merece seguimiento activo. No como dependencia directa, sino como laboratorio de:

- integración visual;
- orquestación de APIs;
- diseño de execution engines;
- seguridad en requests configurables;
- producto/POC/MVP.
