import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../pi-server/dist/pi-server/src/clients-static-files/pi-client",
  },
});
