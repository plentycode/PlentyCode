(function () {

    "use strict";

    var gulp = require("gulp"),
        $ = require('gulp-load-plugins')();

    // Views task
    gulp.task('views', function () {
        //index should be moved separately
        gulp.src('./app/index.html')
            .pipe(gulp.dest('release/'));

        // Any other view files from /views
        gulp.src('./app/modules/**/*.html')
            .pipe(gulp.dest('release/views/'));
    });

})();
