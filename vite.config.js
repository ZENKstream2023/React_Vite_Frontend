import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": "/src", // Alias para la carpeta 'src'
			"@pages": "/src/pages", // Alias para la carpeta 'pages'
			"@components": "/src/components", // Alias para la carpeta 'components'
			// Agrega otros alias aquí si lo deseas
		},
		server: {
			https: true, // Habilitar HTTPS
		},
	},
});
