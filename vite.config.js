import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/wedding/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".")[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          } else if (/mp3|wav/i.test(extType)) {
            extType = "audio";
          } else if (/mp4|webm/i.test(extType)) {
            extType = "video";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
      },
    },
  },
  publicDir: "public", // Asegura que los archivos de public se copien a dist
  server: {
    port: 3000, // Puerto en el que se ejecuta el servidor
    open: true, // Abre el navegador automáticamente al iniciar el servidor
    host: true, // Escucha en todas las interfaces (0.0.0.0), permitiendo acceso desde otros dispositivos
  },
});
