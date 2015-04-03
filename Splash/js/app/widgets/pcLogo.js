(function () {
    'use strict';

    angular
            .module('app.widgets')
            .directive('pcLogo', pcLogo);

    function pcLogo() {
        var directive = {
            link: link,
            scope: {
            },
            replace: true,
            templateUrl: 'views/widgets/pcLogo.html',
            restrict: 'AE'
        };
        return directive;

        function link(scope, element, attrs) {
            attrs.$set('class', 'plenty-logo');
        }

    }
}());
