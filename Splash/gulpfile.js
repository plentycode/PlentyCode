var gulp = require('gulp');
var bower = require('gulp-bower');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var path = require('path');
var browserify = require('browserify');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('default', ['js','less','watch']);

gulp.task('bower', function () {
    return bower()
            .pipe(gulp.dest('js/vendor/'));
});

gulp.task('less', function () {
    return gulp.src('less/*.less')
            .pipe(less({
                paths: [path.join(__dirname, 'less', 'includes')]
            }))
            .pipe(gulp.dest('css'));
});

gulp.task('js', function () {
    var bundler = browserify({
        entries: ['./js/index.js'],
        paths: ['./node_modules', '.js'],
        debug:true
    });

    var bundle = function () {
        return bundler
                .bundle()
                .pipe(source('bundle.js'))
                .pipe(buffer())
                .pipe(uglify())
                .pipe(sourcemaps.init({loadMaps: true}))
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest('./release/js/'));
    };

    return bundle();
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch('less/**/*.less', ['less']);
    gulp.watch('js/app/**/*.js', ['js']);
});