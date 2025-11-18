import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            xs: "320px",
            sm: "550px",
            md: "850px",
            lg: "1000px",
            xl: "1100px",
            "2xl": "1280px",
        },
        colors: {
            deep: "#0F172B",
            current: "#fea116",
            gray: "#666565",
        },
    },
    plugins: [],
} satisfies Config;
