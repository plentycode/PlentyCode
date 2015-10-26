(function () {

    "use strict";

    var config = require("./"),
        extend = require("extend"),
        runOptions = {};

    runOptions = extend(runOptions, config.run.options);

    //runOptions.env['NODE_ENV'] = 'development';
    runOptions.watch = [
        'app',
        'config',
        'lib'
    ];

    module.exports = {
        options: runOptions
    };

}());
