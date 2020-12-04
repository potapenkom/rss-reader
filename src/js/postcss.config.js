const postcssImport = require('postcss-import');
const postcssCssNext = require('postcss-cssnext');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    postcssImport,
    postcssCssNext,
    autoprefixer,
  ],
};
