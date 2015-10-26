(function () {

    "use strict";

    var config = require("./");

    module.exports = {
        paths: {
            js: [config.sourceDirectory + "/js/**/*.js"],
            scss: [config.sourceDirectory + "/scss/**/*.scss" , config.sourceDirectory + "/js/**/*.scss"],
            html: [config.sourceDirectory + "/js/**/*.html"],
            assets: [config.sourceAssets + "/**/*"]
        }
    };

}());
