import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "192.168.0.101",
    port: 5173,
    allowedHosts: ["dev.hern1k.xyz"],
  },
  base: "/Fumitrade"
}) 