/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
        './node_modules/flyonui/dist/js/*.js',
    ],

    theme: {
        extend: {
        },
    },

    darkMode: 'class',

    plugins: [
        require('@tailwindcss/typography'),
        require('flyonui'),
        require('flyonui/plugin'),
    ],

    flyonui: {
        themes: false,
        styled: true,
    },
};
