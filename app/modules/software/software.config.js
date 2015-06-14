(function () {
    angular.module('app.software')
        .config(config);

    /* @ngInject */
    function config($stateProvider) {

        $stateProvider
        .state('software', {
            url: '/software',
            templateUrl: 'views/software/software.html',
            controller: 'Software'
        });
    }

})();
