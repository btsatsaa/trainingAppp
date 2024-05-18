const colors = require('tailwindcss/colors')

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
                // 'primary-light': '#CFD8FC',

                // 'secondary-light': '#FFFFFF',
                // 'ternary-light': '#B8C2CB',

                // // Dark colors//008080//404040
                // 'primary-dark': '#202020', //boljn
                // 'secondary-dark': '#658AAF',
                // 'ternary-dark': '#515C65',

                // Extended v3 color
                // Light colors
                'primary-light': '#9A9BCB',

                'secondary-light': '#FFFFFF',
                'ternary-light': '#A9AFB3',

                // Dark colors//008080//404040
                'primary-dark': '#132735', //boljn
                'secondary-dark': '#658AAF',
                'ternary-dark': '#515C65',
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
}
