(function () {

    "use strict";

    var gulp = require("gulp"),
        $ = require('gulp-load-plugins')();

    //minifies the html views
    gulp.task('minify-html', function () {
        var opts = {
            conditionals: true,
            spare: true
        };

        return gulp.src('./release/views/**/*.html')
            .pipe($.minifyHtml(opts))
            .pipe(gulp.dest('./release/views'));
    });

})();
