(function () {
    angular.module('app.router', ['ui.router'])
            .config(config);


    /* @ngInject */
    function config($stateProvider, $urlRouterProvider, $locationProvider) {


        $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'views/pages/home.html',
                    controller: 'Home'
                })
                .state('contact-us', {
                    url: '/contact-us',
                    templateUrl: 'views/pages/contact-us.html'
                })
                .state('software', {
                    url: '/software',
                    templateUrl: 'views/pages/software.html'
                })
                .state('mobile-apps', {
                    url: '/mobile-apps',
                    templateUrl: 'views/pages/mobile-apps.html'
                })
                .state('webpages', {
                    url: '/web-pages',
                    templateUrl: 'views/pages/web-pages.html'
                })
                .state('webpages.item', {
                    url: '/:item',
                    templateUrl: 'pages/webpages.item.html',
                    controller: function ($scope, $stateParams) {
                        $scope.item = $stateParams.item;
                    }
                });
        $urlRouterProvider.otherwise('/home');

        // $locationProvider.html5Mode(true);
        //  $locationProvider.hashPrefix('!');
    }

}());