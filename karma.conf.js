// browsers: ['ChromeHeadlessNoSandbox'],
// customLaunchers: {
//   ChromeHeadlessNoSandbox: {
//     base: 'ChromeHeadless',
//     flags: ['--no-sandbox']
//   }
// }

export default function(config) {
  config.set({
    basePath: '../..',
    frameworks: ['jasmine'],
    browsers: ['ChromeHeadlessNoSandbox', 'Safari'],
customLaunchers: {
  ChromeHeadlessNoSandbox: {
    base: 'ChromeHeadless',
    flags: ['--no-sandbox']
  }
}


    //...
  });
};