var lint = require('mocha-eslint');

var paths = [
  'src/*.js',
  'test/**/*.js',
];

var options = {
    formatter: 'compact'
};

lint(paths, options);
