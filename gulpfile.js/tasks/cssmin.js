(function () {

    "use strict";

    var gulp = require("gulp"),
        $ = require('gulp-load-plugins')();

    //minifies the css generated
    gulp.task('cssmin', function () {
        gulp.src('./release/css/*.css')
            .pipe($.cssmin())
            .pipe(gulp.dest('./release/css'));
    });

})();
