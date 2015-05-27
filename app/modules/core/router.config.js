(function () {
    angular.module('app.router', ['ui.router'])
        .config(config);


    /* @ngInject */
    function config($stateProvider, $urlRouterProvider, $locationProvider) {


        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/layout/pages/home.html',
                controller: 'Home'
            })
            .state('software', {
                url: '/software',
                templateUrl: 'views/layout/pages/software.html'
            })
            .state('mobile-apps', {
                url: '/mobile-apps',
                templateUrl: 'views/layout/pages/mobile-apps.html'
            });
            
        $urlRouterProvider.otherwise('/home');

        //$locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }

}());