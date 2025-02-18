import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "192.168.0.101",
    port: 5173,
    allowedHosts: ["dev.hern1k.xyz"],
  },
  preview: {
    host: "192.168.0.101",
    port: 5173,
    allowedHosts: ["dev.hern1k.xyz"],
  },
  base: "/Fumitrade",
  build: {
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks(id: any) {
          const excludedChunks = [
            "@babel", 
            "dom-helpers", 
            "html-parse-stringify", 
            "set-cookie-parser", 
            "turbo-stream", 
            "void-elements"
          ];

          for (const chunk of excludedChunks) {
            if (id.includes(chunk)) {
              return null;
            }
          }

          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        },
      },
    },
  },
}) 