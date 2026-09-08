// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Keep Lovable's default target locally and on Lovable hosting. Vercel exposes
// these variables during its build, where Nitro must emit Build Output API v3.
const isVercel = process.env.VERCEL === "1" || process.env.VERCEL_ENV != null;

// Prevent Lovable-only variables copied into Vercel settings from forcing the
// Cloudflare output format, which leaves Vercel without a routable function.
if (isVercel) {
  delete process.env.LOVABLE_SANDBOX;
  delete process.env.DEV_SERVER__PROJECT_PATH;
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: isVercel ? { preset: "vercel" } : undefined,
});
