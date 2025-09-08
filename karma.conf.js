// browsers: ['ChromeHeadlessNoSandbox'],
// customLaunchers: {
//   ChromeHeadlessNoSandbox: {
//     base: 'ChromeHeadless',
//     flags: ['--no-sandbox']
//   }
// }

module.exports = function(config) {
  config.set({
    basePath: '../..',
    frameworks: ['jasmine'],
    browsers: ['ChromeHeadlessNoSandbox'],
customLaunchers: {
  ChromeHeadlessNoSandbox: {
    base: 'ChromeHeadless',
    flags: ['--no-sandbox']
  }
}


    //...
  });
};