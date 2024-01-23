import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-orange': 'hsl( var(--primary-orange) )',
        'primary-blackish': 'hsl( var(--primary-blackish) )',
        'primary-lightGray': 'hsl( var(--primary-lightGray) )',
        'primary-offWhite': 'hsl( var(--primary-offWhite) )',
        'primary-black': 'hsl( var(--primary-black) )',
        'primary-white': 'hsl( var(--primary-white) )',
        'ascent-orange': 'hsl( var(--ascent-orange) )',
      },
    },
  },
  plugins: [],
};
export default config;
