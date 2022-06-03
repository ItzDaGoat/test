module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#3c067b",
                secondry: "#4d505e ",
            },
        },
    },

    plugins: [require("daisyui")],
}
