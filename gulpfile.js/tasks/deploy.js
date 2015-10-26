(function () {

    "use strict";

    var gulp = require("gulp"),
        runSequence = require('run-sequence').use(gulp);

    //deploy task
    gulp.task('deploy', function () {
        runSequence(
            ['js', 'views', 'less', 'content'],
            ['uglify', 'cssmin', 'minify-html'],
            'run'
            );
    });

}());
