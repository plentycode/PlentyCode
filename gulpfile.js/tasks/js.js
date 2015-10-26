(function () {

    "use strict";

    var gulp = require("gulp"),
        $ = require('gulp-load-plugins')(),
        browserify = require('browserify'),
        source = require('vinyl-source-stream'),
        buffer = require('vinyl-buffer'),
        options = {};

        options.insertGlobals = true;
        options.extensions = ['.html', '.json'];
        options.transform = ['stringify'];
        options.entries = ['./app/index.js'];
        options.paths = ['./node_modules', '.js'];


        if (process.env.NODE_ENV === "" || process.env.NODE_ENV === undefined || process.env.NODE_ENV === 'development') {
            options.debug = true;
        }

        //creates the bundle file and bundle.js.map
        gulp.task('js', function () {
            var bundle = function () {
                return browserify(options)
                    .bundle()
                    .pipe(source('bundle.js'))
                    .pipe(buffer())
                    .pipe($.sourcemaps.init({
                    loadMaps: true
                }))
                    .pipe($.sourcemaps.write('./'))
                    .pipe(gulp.dest('./release/js/'))
                    .pipe($.livereload())
                    .pipe($.notify({
                        onLast: true,
                        message: function () {
                            return 'built js correctly!';
                        }
                    }))
                    .on('error', swallowError);
            };

            return bundle();
        });

        function swallowError(error) {
            $.notify({
                onLast: true,
                message: function () {
                    return 'error trying to build';
                }
            });
            //If you want details of the error in the console
            console.log(error.toString());
            /*jshint validthis:true */
            this.emit('end');
        }

})();
