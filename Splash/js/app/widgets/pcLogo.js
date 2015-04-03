(function () {
    'use strict';

    angular
            .module('app.widgets')
            .directive('pcLogo', pcLogo);

    /* @ngInject */
    function pcLogo() {
        var directive = {
            link: link,
            scope: {
            },
            replace: true,
            templateUrl: 'js/app/widgets/pcLogo.html',
            restrict: 'AE'
        };
        return directive;

        function link(scope, element, attrs) {
            attrs.$set('class', 'plenty-logo');
        }
        
    }
}());
