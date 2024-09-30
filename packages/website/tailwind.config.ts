import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          '100': '#FFFBF5',
          '200': '#FFF6E5',
          '600': '#FF620A',
          '700': '#F15802',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
