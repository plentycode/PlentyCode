(function () {

    "use strict";

    var gulp = require("gulp"),
        $ = require('gulp-load-plugins')();


    // 1. gulp build -> builds the project
    gulp.task('build', ['jshint', 'test', 'js', 'views', 'less', 'content']);

})();
