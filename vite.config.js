import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 3000, // Puerto en el que se ejecuta el servidor
    open: true, // Abre el navegador automáticamente al iniciar el servidor
    host: true, // Escucha en todas las interfaces (0.0.0.0), permitiendo acceso desde otros dispositivos
  },
});
