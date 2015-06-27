var gulp = require('gulp');
var mocha = require('gulp-mocha');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var header = require('gulp-header');
var footer = require('gulp-footer');
var jsonFormat = require('gulp-json-format');
var runSequence = require('run-sequence');

gulp.task('clean', function() {
  return gulp.src('airports.json', { read: false })
    .pipe(clean());
});

gulp.task('build', function() {
  return gulp.src('countries/*.json')
    .pipe(concat('airports.json', { newLine: ',' }))
    .pipe(header('{'))
    .pipe(footer('}'))
    .pipe(jsonFormat(2))
    .pipe(gulp.dest('./'));
});

gulp.task('test', function() {
  return gulp.src(['tests/index.js'], { read: false })
    .pipe(mocha({ reporter: 'spec' }));
});

gulp.task('default', function(callback) {
  runSequence('clean', 'build', 'test', callback);
});
