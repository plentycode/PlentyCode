(function () {

    "use strict";

    var gulp = require("gulp"),
        stylish = require('jshint-stylish'),
        $ = require('gulp-load-plugins')();

    // JSHint task
    gulp.task('jshint', function () {
        gulp.src(['app/*.js', 'app/**/*.js'])
            .pipe($.jshint())
            .pipe($.jshint.reporter(stylish));
        //.pipe(jshint.reporter('fail'));
    });

})();
