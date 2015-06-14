(function () {
    'use strict';

    //requires the modules
    require('./core');
    require('./layout');
    require('./widgets');
    require('./home');
    require('./contact');
    require('./software');
    require('./mobiles');
    require('./web-pages');

    //adds the applications modules
    angular.module('app', [
        'app.core',
        'app.layout',
        'app.widgets',
        'app.home',
        'app.contact',
        'app.software',
        'app.mobiles',
        'app.webpages'
    ]);

}());
