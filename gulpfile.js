/* globals require: false, __dirname */

// require('es6-promise').polyfill();  // Fore node.js 0.10 users!
var gulp = require("gulp");
var babel = require("gulp-babel");


gulp.task('build-js', function(){
  return gulp.src("static/es6/*.js")
    .pipe(babel())
    .pipe(gulp.dest("static/js/"));
})

gulp.task('watch-js', function(){
    return gulp.watch(
        'static/es6/**/*.js',
        ['build-js']);
})

gulp.task('watch', ['watch-js']);


gulp.task('build', ['build-js']);


gulp.task('default', ['build']);
