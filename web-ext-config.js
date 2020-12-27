module.exports = {
  sourceDir: './add-on-build',
  verbose: true,
  run: {
    firefox: 'firefoxdeveloperedition',
    startUrl: ['about:debugging#/runtime/this-firefox'],
    firefoxProfile: 'extension-development',
  },
};
