import { defineConfig } from "vite";
import { resolve } from "node:path";
import { mkdirSync, cpSync } from "node:fs";

export default defineConfig({
    base: "./",

    input: resolve(import.meta.dirname, "html/index.html"),

    build: {
        outDir: "dist",
        emptyOutDir: true,
        minify: "oxc",
        cssMinify: "lightningcss",
        reportCompressedSize: true
    },

    plugins: [
        {
            name: "copiar-imagens",
            closeBundle() {
                const origem = resolve(import.meta.dirname, "imagens");
                const destino = resolve(import.meta.dirname, "dist/imagens");

                mkdirSync(destino, { recursive: true });
                cpSync(origem, destino, { recursive: true });
            }
        }
    ]
});
