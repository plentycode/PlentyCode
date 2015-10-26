(function () {

    "use strict";

    var gulp = require("gulp"),
        karma = require('karma').server;

    gulp.task('test', function(done) {
        karma.start({
            configFile: process.cwd() + '/karma.conf.js',
            singleRun: true
        }, function (exitStatus) {
                done();
            });
    });
    gulp.task('test:tdd', function(done) {
        karma.start({
            configFile: process.cwd() + '/karma.conf.js',
            singleRun: false
        }, function (exitStatus) {
                done();
            });
    });

}());
