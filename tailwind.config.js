module.exports = {
    content: ["./src/*.html", "./src/**/*.html"],
    theme: {
        extend: {
            fontFamily: {
                oswald: ["Oswald", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
            },
            colors: {
                "not-gray": "#ced6dc",
                "half-black": "#292f33",
            },
            screens: {
                'mxl': "1800px"
            }
        },
    },
    plugins: [],
};
