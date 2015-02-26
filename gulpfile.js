var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');

gulp.task('prefixer', function () {
  return gulp.src('src/app.css')
    .pipe(plumber())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('copy', function () {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});


gulp.task('watch', function () {
  gulp.watch('src/*.css', ['prefixer']);
  gulp.watch('src/index.html', ['copy']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('default', ['prefixer', 'copy', 'watch', 'connect']);
