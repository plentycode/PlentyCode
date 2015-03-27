(function ($w) {

    "use strict";

    require.config({
        "baseUrl": "js/",
        "paths": {
            "jquery": "libs/jquery/dist/jquery",
            "angular": "libs/angular/angular",
            "angular-animate": "lib/sangular-animate/angular-animate.min",
        },
        "shim": {
            "angular": {exports: "angular"},
            "angular-animate": {"deps": ["angular"]},
            "jquery": {exports: "$"}
        },
        "waitSeconds": 0
    });


    require([
        'app/app.module'
    ], function(){
        //angular.resumeBootstrap();
    });

})(window);