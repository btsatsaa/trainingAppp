const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
					// Light colors
					// тайвшралын өнгө
				// 	'primary-light': '#4F81D8',
				
				// 	'secondary-light': '#F6FAFF',
				// 	'ternary-light': '#699BF7',
	
				// 	// Dark colors
					
				// 	'primary-dark': '#161617',
				// 'secondary-dark': '#1D2432',
				// 'ternary-dark': '#00163D',
				// 	//////////original//////////
				// Light colors
				// 'primary-light': '#F7F8FC',
				
				// 'secondary-light': '#FFFFFF',
				// 'ternary-light': '#f6f7f8',

				// // Dark colors
				// 'primary-dark': '#0D2438',
				// 'secondary-dark': '#102D44',
				// 'ternary-dark': '#1E3851',
				////////test2//////////
				// Light colors
				'primary-light': '#F7F8FC',
				
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',

				// Dark colors//008080//404040
				'primary-dark': '#404040',//boljn
				'secondary-dark': '#1E3851',
				'ternary-dark': '#606060',

				// Extended v3 color
				gray: colors.neutral,
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '8rem',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
