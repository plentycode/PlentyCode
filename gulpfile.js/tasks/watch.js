(function () {

    "use strict";

    var gulp = require("gulp");

    gulp.task('watch', ['default'], function() {

        var config = require("../config/watch"),
            livereload = require('gulp-livereload');

        livereload.listen();

        gulp.watch('app/less/**/*.less', ['less']);
        gulp.watch(['app/*.js', 'app/**/*.js'], ['jshint', 'test', 'js']);
        gulp.watch(['app/**/*.html', 'app/*.html'], ['views', 'content']);

    });

}());
