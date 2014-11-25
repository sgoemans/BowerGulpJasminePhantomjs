/**
 * Created by Goemans.Stephan on 24.11.2014.
 */
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jasmine = require('gulp-jasmine');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var jasminePhantomJs = require('gulp-jasmine2-phantomjs');

gulp.task("lint", function() {
	return gulp.src("src/**/*.js")
		.pipe(jshint())
		.pipe(jshint.reporter());
});
gulp.task("test", function() {
	return gulp.src("test/**/*.html").pipe(jasminePhantomJs());
});
// Default Task
gulp.task('default', ['lint', /* 'sass', */ 'test' /*, 'watch' */]);