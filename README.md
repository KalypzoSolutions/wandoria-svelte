# Wandoria-Svelte
Hierbei handelt es sich um die Implementierung der Website mithilfe von Svelte-Kit. Github Actions laden es automatisch auf github pages hoch. 
Die Syntax ist identisch mit purem HTML (Kein JSX / TSX). Der Compiler ermöglicht desweiteren mehr Javascript (sofern benötigt)

## Developing 

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

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
