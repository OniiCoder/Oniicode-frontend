const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors:{
            ...colors,
            'dull-gray': '#7A7A7A'
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                oniicode: ['var(--font-oniicode)', 'sans-serif']
            },
            animation: {
                'bounce': 'bounce 1s infinite',
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        }
    },
    plugins: [require('@tailwindcss/forms')],
}
