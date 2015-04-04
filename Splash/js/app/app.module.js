(function () {
    'use strict';

//    //requires the modules 
    require('./layout/layout.module');
    require('./widgets/widgets.module');


    //adds the applications modules
    angular.module('app', [
        'ui.router',
        'ngAnimate',
        'app.layout',
        'app.widgets'
    ]).config(config);

    function config($stateProvider, $urlRouterProvider) {
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
    }
}());