var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var jasmine = require('gulp-jasmine');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var jasminePhantomJs = require('gulp-jasmine2-phantomjs');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-usemin');
var rev = require('gulp-rev');
var jscs = require('gulp-jscs');

gulp.task("lint", function() {
	return gulp.src("src/**/*.js")
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(jshint.reporter('fail'));
});

gulp.task("test", function() {
	return gulp.src("test/**/*.html").pipe(jasminePhantomJs());
});

gulp.task('jscs', function() {
	return gulp.src('src/js/*.js')
		.pipe(jscs({
			"requireCurlyBraces": true
		}));
});

gulp.task('build', [ 'lint', 'jscs' ], function() {
	return gulp.src('src/*.html')
		.pipe(usemin({
			css: [minifyCss(), 'concat'],
			html: [minifyHtml({empty: true})],
			js: [uglify()/*, rev()*/]
		}))
		.pipe(gulp.dest('dist/'));
});
// Default Task
gulp.task('default', ['lint', 'jscs', 'test' ]);