(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('pcLogo', pcLogo);

    function pcLogo() {
        var directive = {
            link: link,
            scope: {
                toggleView: '&'
            },
            templateUrl: 'views/widgets/pcLogo.html',
            restrict: 'AE'
        };
        return directive;

        function link(scope, element, attrs) {
            element.on('click', function () {
                scope.$apply(function () {
                    scope.$parent.$emit('TOGGLE_VIEW');
                });
            });

        }
    }
} ());
