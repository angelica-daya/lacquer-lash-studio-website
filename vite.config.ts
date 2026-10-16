// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Optional sub-path for hosting, e.g. BASE_PATH=/lacquer-lash serves the site at
// demo.angelicadfernandez.com/lacquer-lash. Unset (Lovable preview, local dev) = site root.
const basePath = (process.env.BASE_PATH ?? "").replace(/^\/+|\/+$/g, "");
const base = basePath ? `/${basePath}/` : "/";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: { base },
});
