//Basic build process. Nothing too fancy

var gulp = require('gulp');
var concat = require('gulp-concat');
var prettify = require('gulp-jsbeautifier');
var minify = require('gulp-minify');

gulp.task('default', function() {
  return gulp.src(['./src/constants/start.js','./src/*.js','./src/constants/end.js'])
    .pipe(concat('anything.js'))
    .pipe(prettify())
    .pipe(minify({
        ext:{
            src: '.js',
            min: '.min.js'
        }
    }))
    .pipe(gulp.dest('./dist/'));
});
