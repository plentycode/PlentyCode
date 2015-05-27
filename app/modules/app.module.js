(function () {
    'use strict';

    //requires the modules 
    require('./core/core.module');
    require('./layout/layout.module');
    require('./widgets/widgets.module');
    require('./contact');
     require('./web-pages');

    //adds the applications modules
    angular.module('app', [
        'app.core',
        'app.layout',
        'app.widgets',
        'app.contact',
        'app.webpages'
    ]);

}());