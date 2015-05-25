module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        plugins: ['karma-*'],
        frameworks: ['jasmine', 'browserify'],
        preprocessors: {
            'app/**/*.js': ['browserify']
        },
        files: [
          'app/**/*.spec.js'
        ],
        browserify: {
            debug: true // output source maps
                //transform: ['browserify-istanbul']
        }
    });
};