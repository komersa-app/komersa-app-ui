import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

      },
      
      width: {
        '100': '100%',  // Vous pouvez définir d'autres largeurs personnalisées ici.
        '128': '32rem', // Exemple de largeur personnalisée de 128 unités Tailwind.
      },
      borderWidth: {
        '1': '1px', // Ajoute une taille de bordure de 1 pixel
      }
    },
  },
  plugins: [
   require('daisyui'),
   require("@tailwindcss/typography"),
],
};
export default config;
