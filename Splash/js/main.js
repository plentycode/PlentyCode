(function () {

    "use strict";

    require.config({
        "baseUrl": "js/",
        "paths": {
            angular: "vendor/angular/angular",
            "angular-route":"vendor/angular-route/angular-route",
            "angular-animate": "vendo/sangular-animate/angular-animate.min"
        },
        "shim": {
            angular: {exports: "angular"},      
            "angular-animate": {"deps": ["angular"]}
        },
        "waitSeconds": 0
    });


    require([
        'app/app.module'
    ], function(){
       // angular.resumeBootstrap();
    });

}(window));