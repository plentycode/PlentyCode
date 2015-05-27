(function () {
    angular.module('app.contact')
        .config(config);		
		
    /* @ngInject */
    function config($stateProvider) {

        $stateProvider
            .state('contact-us', {
            url: '/contact-us',
            templateUrl: 'views/contact/contact-us.html',
            controller: 'Contact',
            controlerAs: 'contact'
        });
    }

})();