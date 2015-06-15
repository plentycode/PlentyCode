(function () {
    'use strict';
    require('./router.config');

    angular.module('app.core', [
        'app.router',
        'ngAnimate',
        'angulartics',
        'angulartics.google.analytics'
    ]);
    require('./dataservice');
})();
