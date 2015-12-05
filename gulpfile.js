//Basic build process. Nothing too fancy

var gulp = require('gulp');
var concat = require('gulp-concat');
var prettify = require('gulp-jsbeautifier');
var git = require('gulp-git');
var jsfuck = require('gulp-jsfuck');
var rename = require("gulp-rename");

gulp.task('default', function() {
  return gulp.src(['./src/constants/start.js','./src/*.js','./src/constants/end.js'])
    .pipe(concat('anything.js'))
    .pipe(prettify())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('git', function() {
  return gulp.src('./dist/anything.js')
    .pipe(git.add())
    .pipe(git.commit('update dist'))
    .pipe(git.push('origin', 'master', function (err) {
      if (err) throw err;
    }));

});

gulp.task('fuck', function() {
    return gulp.src('./dist/anything.js')
    .pipe(jsfuck())
    .pipe(rename("anything.fucked.js"))
    .pipe(gulp.dest('./dist/'));
})