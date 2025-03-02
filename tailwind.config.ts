import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A8A",
          50: "#EBF0FF",
          100: "#D6E0FF",
          200: "#ADC2FF",
          300: "#85A4FF",
          400: "#5C86FF",
          500: "#3468FF",
          600: "#1E3A8A", // Color base
          700: "#152C6B",
          800: "#0D1D4D",
          900: "#050F2E",
        },
        secondary: {
          DEFAULT: "#FACC15",
          50: "#FFFCEB",
          100: "#FEF9C3",
          200: "#FEF08A",
          300: "#FDE047",
          400: "#FACC15", // Color base
          500: "#EAB308",
          600: "#CA8A04",
          700: "#A16207",
          800: "#854D0E",
          900: "#713F12",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.05)",
        card: "0 10px 30px rgba(0, 0, 0, 0.08)",
        highlight: "0 0 15px rgba(250, 204, 21, 0.5)",
        "blue-glow": "0 0 15px rgba(30, 58, 138, 0.5)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
        "slide-up": "slideUp 0.5s ease-in-out forwards",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.5s ease-out forwards",
        "fadeInUp-delay-200": "fadeInUp 0.5s 0.2s ease-out forwards",
        "fadeInUp-delay-300": "fadeInUp 0.5s 0.3s ease-out forwards",
        "fadeInUp-delay-400": "fadeInUp 0.5s 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        fadeInUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(250px, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
} satisfies Config;
