(function () {

    "use strict";

    var gulp = require("gulp");

    //moves all the static content (images/* fonts/*)
    gulp.task('content', function () {
        return gulp.src(['app/content/**/', 'app/content/*'])
            .pipe(gulp.dest('release/content'));
    });


})();
