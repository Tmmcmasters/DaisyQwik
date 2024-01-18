/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
      {
        darkV2: {
          "primary": "#006FEE",
          "secondary": "#7828C8",
          "accent": "#ffffff",
          "neutral": "#71717A",
          "base-100": "#000000",
          "info": "#00ffff",
          "success": "#17C964",
          "warning": "#F5A524",
          "error": "#F31260",
        },
      }
    ],
  },
};
