import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const getProductionBase = () => {
  const explicitBase = process.env.BASE_PATH;
  if (explicitBase) {
    const normalized = explicitBase.startsWith("/") ? explicitBase : `/${explicitBase}`;
    return normalized.endsWith("/") ? normalized : `${normalized}/`;
  }

  return "./";
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? getProductionBase() : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
