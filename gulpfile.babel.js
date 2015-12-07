//Basic build process. Nothing too fancy

const gulp = require('gulp'),
      concat = require('gulp-concat'),
      prettify = require('gulp-jsbeautifier'),
      minify = require('gulp-minify'),
      jsdoc = require("gulp-jsdoc");

gulp.task('default', () => {
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

gulp.task('jsdoc', () => {
    gulp.src(['README.md', './src/*.js'])
    .pipe(jsdoc('./docs'))
});

gulp.task('fuck', () => {
    const jsfuck = require('gulp-jsfuck');

    return gulp.src(['./src/constants/start.js','./src/*.js','./src/constants/end.js'])
        .pipe(concat('anything.fucked.js'))
        .pipe(jsfuck())
        .pipe(gulp.dest('./dist/'));
});
