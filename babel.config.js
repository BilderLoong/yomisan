module.exports = {
  presets: [['@babel/preset-env'], '@babel/preset-react'],
  plugins: [['@babel/plugin-proposal-class-properties', { loose: true }]],
};

// module.exports = function (api) {
//   api.cache(true);
// };