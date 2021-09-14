const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['Space Mono', ...defaultTheme.fontFamily.mono],
				sans: ['Acumin Pro', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};

module.exports = config;
