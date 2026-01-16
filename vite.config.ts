import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      // Временно отключаем componentTagger, так как он может вызывать проблемы с загрузкой React
      // mode === "development" && componentTagger()
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      minify: mode === "production" ? "esbuild" : false,
      sourcemap: mode === "development",
      chunkSizeWarningLimit: 1000,
    },
  };
});
