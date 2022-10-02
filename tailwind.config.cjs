const production = !process.env.ROLLUP_WATCH;
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    colors: {
      dark_blue: '#0D0D26',
      mid_dark_blue: '#1D1D4C',
      mid_blue: '#A1A1C6',
      light_blue: '#B6B6DD',
      orange: '#FF8B00',
    },
    fontFamily: {
      rooney: ['RooneySans', 'sans-serif'],
      rooneyL: ['RooneySansLight', 'sans-serif'],
      rooneyB: ['RooneySansBold', 'sans-serif'],
    },
  },
  plugins: [],
  purge: {
    content: ['./src/**/*.svelte'],
    enabled: true, // disable purge in dev
  },
};
