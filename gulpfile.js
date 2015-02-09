'use strict';

var gulp = require('gulp');
var console = require('better-console');

// Load plugins
var $ = require('gulp-load-plugins')();

gulp.task('jest', function () {
    console.clear();
    return gulp.src('__tests__').pipe($.jest());
});

gulp.task('tdd', [], function () {
    gulp.watch(['*.js', '__tests__/*'], ['jest']);
});
