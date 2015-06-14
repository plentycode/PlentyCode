(function () {
    angular.module('app.router', ['ui.router'])
        .config(config);


    /* @ngInject */
    function config($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/home');

        //$locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }

}());
