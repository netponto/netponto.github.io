"use strict";

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
var run = require('gulp-run');
var gutil = require('gulp-util');
var imagemin = require('gulp-imagemin');

var imagePattern = '/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)';

var AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

var path = {
    site: '_site',
    css: '_site/assets/css',
    js: '_site/assets/js',
    img: '_site/assets/img'
};

gulp.task('styles', function () {
    return gulp.src(path.css + '/**/**.css')
        .pipe(autoprefixer({
            browsers: AUTOPREFIXER_BROWSERS
        }))
        .pipe(csso())
        .pipe(gulp.dest(path.css));
});

gulp.task('scripts', function () {
    return gulp.src(path.js + '/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(path.js));
});

gulp.task('pages', function () {
    return gulp.src([path.site + '/**/*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest(path.site));
});

gulp.task('clean', () => del([path.site]));

gulp.task('build', function () {
    return gulp.src('')
        .pipe(run('bundle exec jekyll build'))
        .on('error', gutil.log);
});

gulp.task('images', function () {
    return gulp.src(path.img + imagePattern)
        .pipe(imagemin())
        .pipe(gulp.dest(path.img));
});

gulp.task('default', ['clean'], function () {
    runSequence(
        'build',
        'styles',
        'scripts',
        'pages',
        'images'
    );
});