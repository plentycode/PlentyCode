(function () {

    "use strict";

    var gulp = require("gulp");

    gulp.task('run', ['watch'], function() {

        var gutil = require('gulp-util'),
            nodemon = require('gulp-nodemon'),
            livereload = require('gulp-livereload'),
            config = require("../config/run");

        gutil.log(gutil.colors.yellow("run options: "), config);

        nodemon(config.options)
            .on('restart', function () {
                gutil.log(gutil.colors.cyan('\n-----\nServer Refreshed\n-----'));
                setTimeout(livereload.reload, 1000);
            });
    });

}());
