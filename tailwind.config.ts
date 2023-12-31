import type { Config as TailwindConfig } from 'tailwindcss';

const tailwindConfig: TailwindConfig = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: { sm: '480px', md: '768px', lg: '976px', xl: '1440pd' },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      invert: {
        90: '.9',
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
