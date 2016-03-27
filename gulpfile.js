/* globals require: false, __dirname */

// require('es6-promise').polyfill();  // Fore node.js 0.10 users!
var gulp = require("gulp");
var babel = require("gulp-babel");

// gulp.task('watch', ['watch-js']);


gulp.task('build-all', function (callback) {
  return gulp.src("static/es6/*.js")
    .pipe(babel())
    .pipe(gulp.dest("static/js/"));
});


gulp.task("default", ['build-all']);
