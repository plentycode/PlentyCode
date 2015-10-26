(function () {
    'use strict';

    var requireDir = require('require-dir'),
    gutil = require('gulp-util'),
    processMessage = "";

    // Require all tasks in gulp/tasks, including subfolders
    requireDir('./tasks', { recurse: true });

    if (process.env.NODE_ENV) {
        processMessage = "is set to " + process.env.NODE_ENV;
    } else {
        gutil.beep();
        processMessage = "is not set.";
    }

    gutil.log(gutil.colors.yellow('The environment variable'), gutil.colors.cyan("process.env.NODE_ENV"), gutil.colors.yellow(processMessage));


})();
