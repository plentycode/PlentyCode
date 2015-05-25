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
            .state('contact-us', {
                url: '/contact-us',
                templateUrl: 'views/layout/pages/contact-us.html'
            })
            .state('software', {
                url: '/software',
                templateUrl: 'views/layout/pages/software.html'
            })
            .state('mobile-apps', {
                url: '/mobile-apps',
                templateUrl: 'views/layout/pages/mobile-apps.html'
            })
            .state('webpages', {
                url: '/web-pages',
                templateUrl: 'views/layout/pages/web-pages.html'
            })
            .state('webpages.item', {
                url: '/:item',
                templateUrl: function ($stateParams) {
                    return 'views/layout/pages/_web-pages/' + ($stateParams.item || 'web-sites') + '.html';
                },
                controller: 'WebPages'
            });
        $urlRouterProvider.otherwise('/home');

        //$locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }

}());