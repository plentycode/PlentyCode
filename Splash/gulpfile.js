var gulp = require('gulp'),
        bower = require('gulp-bower'),
        less = require('gulp-less'),
        uglify = require('gulp-uglify'),
        jshint = require('gulp-jshint'),
        stylish = require('jshint-stylish'),
        path = require('path'),
        browserify = require('browserify'),
        sourcemaps = require('gulp-sourcemaps'),
        source = require('vinyl-source-stream'),
        buffer = require('vinyl-buffer');


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
// JSHint task
gulp.task('jshint', function () {
    gulp.src(['js/*.js', 'js/app/**/*.js'])
            .pipe(jshint())
            .pipe(jshint.reporter(stylish));
            //.pipe(jshint.reporter('fail'));
});

gulp.task('js', function () {
    var bundler = browserify({
        entries: ['./js/index.js'],
        paths: ['./node_modules', '.js'],
        debug: true
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
//default task run it use: gulp
gulp.task('default', ['jshint', 'js', 'less', 'watch']);

// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch('less/**/*.less', ['less']);
    gulp.watch(['js/*.js', 'js/app/**/*.js'], ['jshint', 'js']);
});