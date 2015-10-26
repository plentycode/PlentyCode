(function () {

    "use strict";

    var gulp = require("gulp"),
        $ = require('gulp-load-plugins')();

    //minifies the bundle file and annotates angular injected modules
    gulp.task('uglify', function () {
        gulp.src('./release/js/*.js')
            .pipe($.ngAnnotate())
            .pipe($.uglify())
            .pipe(gulp.dest('./release/js'));
    });

})();
