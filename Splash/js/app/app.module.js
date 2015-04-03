(function () {
    'use strict';
     
//    //requires the modules
    require('./layout/layout.module');
    require('./widgets/widgets.module');
    require('./router/router.module');

    //adds the applications modules
    angular.module('app', [
        'app.layout',
        'app.widgets',
        'app.router'
    ]);
}());