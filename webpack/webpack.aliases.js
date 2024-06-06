const { createWebpackAliases } = require('./webpack.helpers');

/**
 * Export Webpack Aliases
 *
 * Tip: Some text editors will show the errors or invalid intellisense reports
 * based on these webpack aliases, make sure to update `tsconfig.json` file also
 * to match the `paths` we using in here for aliases in project.
 */
module.exports = createWebpackAliases({
  '@*': 'src/*',
  '@components': 'src/components',
  '@components/atoms': 'src/components/atoms',
  '@components/molecules': 'src/components/molecules',
  '@components/organisms': 'src/components/organisms',
  '@pages': 'src/pages',
  '@assets': 'src/assets',
  '@layouts': 'src/layouts',
  '@utils': 'src/utils',
  '@hooks': 'src/hooks',
  '@enums': 'src/enums',
});
