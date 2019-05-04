const gulp = require('gulp');
const dist = './dist/';
const src = './src/';
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');

//sass
gulp.task('sass', function() {
  return gulp.src(src+'flexgrid.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest(dist));
});

// minifier le css
gulp.task('cleanCSS', function() {
  return gulp.src(dist+'flexgrid.css')
    .pipe(cleanCSS({compatibility: 'ie11'}))
    .pipe(gulp.dest(dist));
});

// watcher
gulp.task('watch', function() {
    gulp.watch(src+'flexgrid.scss', gulp.series('sass'));
});
