(function () {
    angular.module('app.home')
        .config(config);

    /* @ngInject */
    function config($stateProvider) {

        $stateProvider
            .state('home', {
            url: '/home',
            templateUrl: 'views/home/Home.html',
            controller: 'Home'
        });
    }

})();
