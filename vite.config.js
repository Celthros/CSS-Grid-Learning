// vite.config.js
export default {
	build: {
		rollupOptions: {
			input: 'src/js/main.js',
			output: {
				entryFileNames: 'main.min.js',
				assetFileNames: 'assets/style.min.css'
			}
		}
	}
}
