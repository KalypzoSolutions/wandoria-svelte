# Wandoria-Svelte
Hierbei handelt es sich um die Implementierung der Website mithilfe von Svelte-Kit. Github Actions laden es automatisch auf github pages hoch. 
Die Syntax ist identisch mit purem HTML (Kein JSX / TSX). Der Compiler ermöglicht desweiteren mehr Javascript (sofern benötigt)

---

## Entwicklung starten

1. Installiere [Bun.js](https://bun.sh/) mit `powershell -c "irm bun.sh/install.ps1 | iex"` (nur für Windows)

2. Öffne das Projekt 

3. Installiere die Dependencies mit `bun i`

```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

## Building

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `bun run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
