var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify);
  b.add('./app/main.jsx');

  return b.bundle()
    .pipe(source('build.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('html', function() {
  gulp.src('./app/index.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['browserify', 'html']);