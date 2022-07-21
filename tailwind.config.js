/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        // colors: {
        //     'primary': '#D17A6A',
        //     'base_blue': '#3183FF',
        // },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
            'luxurious': ['Luxurious Script'],
            'millik': ['Millik']
        },
        container: {
            center: true,
        },
        extend: {},
    },
    plugins: [],
}
