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
                sans: ['var(--font-oniicode)']
            }
        }
    },
    plugins: [require('@tailwindcss/forms')],
}
