const tailwindcss = require('tailwindcss');
tailwindcss('./tailwind.config.js');

module.exports = {
  parser: require('postcss-comment'),
  syntax: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    'postcss-custom-properties-fallback': {
    },
    tailwindcss,
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
    autoprefixer: {},
  },
};
