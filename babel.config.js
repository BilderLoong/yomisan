module.exports = {
  presets: [
    // ['@babel/preset-env', { targets: 'last 2 versions' }],
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    //Using the below cause debug diffclut
    // ['@babel/plugin-proposal-private-methods', { loose: true }],
    // ['@babel/transform-runtime'],
  ],
};

// module.exports = function (api) {
//   api.cache(true);
// };
