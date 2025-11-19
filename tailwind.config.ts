import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            "2xl": { max: "1280px" },
            xl: { max: "1100px" },
            lg: { max: "1000px" },
            md: { max: "750px" },
            sm: { max: "550px" },
            xs: { max: "400px" },
        },
        colors: {
            deep: "#0F172B",
            current: "#fea116",
            gray: "#666565",
        },
    },
    plugins: [],
} satisfies Config;
