import { defineConfig } from "vite";
import { defineConfig as defineTestConfig, mergeConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default mergeConfig(
  defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }),
  defineTestConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/test/setup.ts",
      css: true,
    },
  })
);
