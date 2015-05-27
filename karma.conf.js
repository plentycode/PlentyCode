module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        plugins: ['karma-*'],
        frameworks: ['jasmine', 'browserify'],
        preprocessors: {
            'app/modules/**/*.js': ['browserify']
        },
        files: [
          'app/modules/**/*.spec.js'
        ],
        browserify: {
            debug: true // output source maps
                //transform: ['browserify-istanbul']
        }
    });
};