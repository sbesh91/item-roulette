module.exports = {
  globDirectory: 'docs/',
  globPatterns: ['**/*.{ico,css,js,html}'],
  swDest: 'docs/sw.js',
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
};
