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
                "userForm": "400px",
            },
            height: {
                'page': 'calc(100% - 64px)',
            }
        },
    },
    plugins: [
        function({ addUtilities }) {
            const newUtilities = {
                '.scrollbar-thin': {
                    scrollbarWidth: 'thin',
                    scrollbarColor: 'rgb(31 29 29)',
                },
                '.scrollbar-webkit': {
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: 'white',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgb(31, 41, 55,0.5)',
                        border: '1px solid white',
                        borderRadius: '20px',
                    },
                },
                '.scrollbar-left': {
                    overflowX: 'scroll',
                    flexDirection: 'row-reverse',
                   
                },
            };

            addUtilities(newUtilities, ['responsive', 'hover']);
        }
    ],
};
