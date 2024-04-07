/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                "xs": "480px",
                "2xs": "320px"
            },
            width: {
                "userForm": "450px"
            }
        },
    },
    plugins: [],
}

