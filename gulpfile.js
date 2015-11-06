'use strict';

var gulp = require('gulp');

var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var resolve = require('resolve');

var libs = ['react', 'react-dom', 'material-ui/lib/raised-button'];

gulp.task('build-app', function() {
  var bundler = browserify({
    entries: ['./src/app.js'], // Only need initial file, browserify finds the deps
    transform: [reactify], // We want to convert JSX to normal javascript
    debug: true, // Gives us sourcemapping
  });

  libs.forEach(function(lib) {
    bundler.external(lib);
  });

  bundler.bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('build-vendor', function() {
  var bundler = browserify({
    debug: false, // Gives us sourcemapping
    transform: [reactify], // We want to convert JSX to normal javascript
  });

  libs.forEach(function(lib) {
    bundler.require(resolve.sync(lib), {
      expose: lib
    });
  });

  bundler.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/js/vendor/'));
});

gulp.task('copy', function() {
  gulp.src(['./src/index.html'])
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['build-app'])
