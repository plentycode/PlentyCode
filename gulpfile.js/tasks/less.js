(function () {

    "use strict";

    var gulp = require("gulp"),
        path = require('path'),
        $ = require('gulp-load-plugins')();

    //builds less into css files and move them to release
    gulp.task('less', function () {
        return gulp.src('app/less/*.less')
            .pipe($.sourcemaps.init({ loadMaps: true }))
            .pipe($.less({
                paths: [path.join(__dirname, 'less', 'includes')]
            }))
            .pipe($.sourcemaps.write())
            .pipe(gulp.dest('release/css'));
    });

})();
