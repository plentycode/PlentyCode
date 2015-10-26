(function () {

    "use strict";

    var config = {};


    config.run = {
        options: {
            verbose: false,
            script: 'server.js',
            ext: 'html js scss json',
            ignore: [
                'node_modules/**/*.*',
                'gulpfile.js/**/*.*',
                'app/lib/tmp/**/*.*'
            ],
            env: {
                'NODE_ENV': 'development',
                'PORT': 2100
            },
            nodeArgs: []
        }
    };

    module.exports = config;

}());
