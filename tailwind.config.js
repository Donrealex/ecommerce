/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(26, 100%, 55%)",
        pale: "hsl(25, 100%, 94%)", // Pale Orange
        darkBlue: "hsl(220, 13%, 13%)", // Very dark blue
        darkGray: "hsl(219, 9%, 45%)", // Dark grayish blue
        grayishBlue: "hsl(220, 14%, 75%)", // grayish blue
        lightBlue: "hsl(223, 64%, 98%)", // Light grayish blue
        White: "hsl(0, 0%, 100%)", //
        Black: "hsl(0, 0%, 0%)", // (with 75% opacity for lightbox background)
      },
      fontFamily: {
        kumbh: '"Kumbh Sans", serif',
      },
    },
  },
  plugins: [],
};

