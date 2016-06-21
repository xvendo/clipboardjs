Package.describe({
  name: 'xvendo:clipboardjs',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Easily copy and paste',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/xvendo/clipboardjs.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles(['src/clipboard.min.js'],'client');  
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('xvendo:clipboardjs');
  api.addFiles('xvendo_clipboardjs_test.js');
});
