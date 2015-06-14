(function () {
    angular.module('app.webpages')
        .config(config);

    /* @ngInject */
    function config($stateProvider) {

        $stateProvider
        .state('webpages', {
            url: '/web-pages',
            templateUrl: 'views/web-pages/web-pages.html'
        })
            .state('webpages.item', {
                url: '/:item',
                templateUrl: function ($stateParams) {
                    return 'views/web-pages/_web-pages/' + ($stateParams.item || 'web-sites') + '.html';
                },
                controller: 'WebPages'
        });
    }
})();
