'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var gutil = require('gulp-util');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default', ['serve']);

gulp.task('clean', function() {
    gulp.src('dist/*')
      .pipe(clean({force: true}));
});

gulp.task('minify-css', function() {
  var opts = {comments:true,spare:true};
  gulp.src(['app/collector.css', '!app/bower_components/**'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('dist/'))
});

gulp.task('minify-js', function() {
  gulp.src(['app/collector.js','app/**/*.js', '!app/bower_components/**'])
    .pipe(uglify({}).on('error', gutil.log))
    .pipe(gulp.dest('dist/'))
});

gulp.task('copy-bower-components', function () {
  gulp.src('app/bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
});

gulp.task('copy-html-files', function () {
  gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy-res', function() {
  gulp.src('app/res/**/*')
    .pipe(gulp.dest('dist/res/'));
});

gulp.task('copy-icon', function() {
  gulp.src('app/favicon.ico')
    .pipe(gulp.dest('dist/'));
});

gulp.task('build',
  ['minify-css', 'minify-js', 'copy-html-files', 'copy-bower-components', 'copy-res', 'copy-icon']
);

gulp.task('build-start', ['build', 'serveDist']);

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'app'}, reload);
});

gulp.task('serveDist', function() {
  browserSync({
	server: {
	  baseDir: 'dist'
	}
  });
});