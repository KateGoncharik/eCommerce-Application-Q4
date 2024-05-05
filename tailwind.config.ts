import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  corePlugins: {
    preflight: false,
  },
  important: '#root',
  plugins: [],
  theme: {
    extend: {},
  },
};

export default config;
