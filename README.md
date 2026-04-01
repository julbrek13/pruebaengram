# pruebaengram

Starter educativo para practicar **GentleAI + SDD + Git** de forma progresiva, con trazabilidad real en commits.

---

## 🎯 Objetivo del repo

Pasar de **Beginner → Engineer** practicando:

- estructura base de proyecto
- flujo SDD (`sdd-init`, explore, propose, spec, tasks, apply, verify)
- buenas prácticas de Git (commits chicos, claros y frecuentes)
- documentación de decisiones para no perder contexto

---

## ⚙️ Estado actual

Este repo ya tiene:

- Node + TypeScript
- Vitest configurado por scripts
- estructura mínima para código y tests
- configuración de VS Code
- roadmap de aprendizaje en `docs/ROADMAP_GENTLEAI.md`

---

## 🚀 Quick start

```bash
npm install
npm run dev
```

Scripts disponibles:

- `npm run dev` → ejecuta `src/main.ts` con `tsx`
- `npm run build` → compila TypeScript con `tsc`
- `npm run test` → corre tests con `vitest`

---

## 🧱 Estructura del proyecto

```text
pruebaengram/
├─ .atl/
│  └─ skill-registry.md
├─ .vscode/
│  ├─ extensions.json
│  └─ settings.json
├─ docs/
│  └─ ROADMAP_GENTLEAI.md
├─ src/
│  ├─ lib/
│  │  └─ sum.ts
│  └─ main.ts
├─ tests/
│  └─ sum.test.ts
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ tsconfig.json
└─ README.md
```

---

## 🧭 Consignas de trabajo (para no perder el enfoque)

### 1) Modo de aprendizaje

- No saltar fases.
- Entender el **por qué** antes del código.
- Validar en código real lo que se propone.
- Evitar copiar/pegar sin comprensión.

### 2) Trazabilidad en Git

- 1 objetivo = 1 commit.
- Commits cortos y descriptivos.
- Siempre revisar cambios antes de commitear.

Secuencia base:

```bash
git status
git diff
git add .
git commit -m "<tipo>: <mensaje claro>"
```

Tipos sugeridos (conventional commits):

- `feat:` nueva funcionalidad
- `fix:` corrección
- `docs:` documentación
- `chore:` tareas de mantenimiento/setup

### 3) Flujo SDD recomendado

Orden sugerido para cambios no triviales:

1. `sdd-init`
2. `sdd-explore <tema>`
3. `sdd-propose <change-name>`
4. `sdd-spec <change-name>`
5. `sdd-tasks <change-name>`
6. `sdd-apply <change-name>`
7. `sdd-verify <change-name>`
8. `sdd-archive <change-name>`

### 4) Regla de complejidad (cuándo delegar)

- **Simple** (1 archivo, cambio mecánico) → directo.
- **Media** (2-4 archivos, algo de análisis) → delegación puntual.
- **Alta** (arquitectura/múltiples capas) → flujo SDD completo.

### 5) Criterios de calidad

- Mensajes de commit claros (qué + por qué).
- Código legible antes que “ingenioso”.
- Documentar decisiones importantes.
- Resolver hallazgos críticos de verify antes de seguir.

---

## 🔐 Configuración Git necesaria (si falla commit)

Si Git rechaza commits por identidad faltante, configurar en este repo:

```bash
git config user.name "Tu Nombre"
git config user.email "tu@email.com"
```

Luego commitear normalmente.

---

## 🌐 Push a GitHub (cuando tengas remoto)

```bash
git remote add origin <URL_DEL_REPO>
git push -u origin master
```

Si preferís usar `main`, podés renombrar rama antes del push.

---

## 📚 Roadmap detallado

El plan completo Beginner → Engineer está en:

`docs/ROADMAP_GENTLEAI.md`

Regla de oro:

- 1 tema = 1 avance concreto
- 1 avance = 1 commit entendible
- cada commit = evidencia de aprendizaje
