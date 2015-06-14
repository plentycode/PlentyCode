(function () {
    angular.module('app.software')
        .config(config);

    /* @ngInject */
    function config($stateProvider) {

        $stateProvider
        .state('mobile-apps', {
            url: '/mobile-apps',
            templateUrl: 'views/mobiles/mobile-apps.html',
            controller: 'Mobiles'
        });
    }
})();
