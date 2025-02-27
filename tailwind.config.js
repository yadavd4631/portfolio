/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        calistoga: ["Calistoga", "sans-serif"],
      },
      animation: {
        spin: "spin 1s linear infinite", // Optional override
        "ping-large": "ping-large 1s ease-in-out infinite",
        'move-left': 'move-left 1s linear infinite',
        'move-right': 'move-right 1s linear infinite',
      },
      keyframes: {
        "ping-large": {
          "75%, 100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        // Only include if you're customizing the default spin
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        'move-left':{
          '0%':{
            transform: 'translateX(0%)'
          },
          '100%':{
            transform: 'translateX(-50%)'
          },
        },
        'move-right':{
          '0%':{
            transform: 'translateX(-50%)'
          },
          '100%':{
            transform: 'translateX(0%)'
          },
        },
      },
    },
  },
  plugins: [],
};
