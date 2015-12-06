var lint = require('mocha-eslint');

var paths = [
  'src/**/*.js',
  'test/**/*.js',
];

lint(paths);
