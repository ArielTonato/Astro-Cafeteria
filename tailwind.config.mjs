/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'principal': ['Raleway', 'sans-serif'],
			'secundaria': ['Roboto', 'sans-serif'],
			'cursiva': ['Bona Nova', 'sans-serif'],
		},
		colors: {
			'primario': '#5E311E',
			'secundario': '#C39C63',
			'negro': '#000',
			'blanco': '#fff',
			'grisClaro': '#eceeef',
			'cafeClaro': '#ebe7de',
		},
		backgroundPosition:{
			'p1':' center 5rem, center 97%,100%',
			'p2':'center 5rem, center 93%,100%',
			'p3':'center right',
			'p4':'center bottom',
			'p5':'bottom right',
			'p6':'center top',
			'p7':'right center'
		}
	},
	plugins: [
		 
	],
}