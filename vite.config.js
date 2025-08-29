// vite.config.js
export default {
	build: {
		rollupOptions: {
			input: 'src/js/main.js', // Your main entry file that imports all other JS files
			output: {
				entryFileNames: 'main.min.js',
				assetFileNames: 'assets/style.min.css'
			}
		}
	}
}