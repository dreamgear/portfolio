/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{vue,js,ts}',
        './content/**/*.md'
    ],
    theme: {
        extend: {}
    },
    plugins: [
        require('@tailwindcss/typography')
    ]
}
