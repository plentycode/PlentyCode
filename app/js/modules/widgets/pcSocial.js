(function () {
    'use strict';

    angular
            .module('app.widgets')
            .directive('pcSocial', pcSocial);

    function pcSocial() {
        var directive = {
            link: link,
            scope: {
            },
          //  replace: true,
            templateUrl: 'views/widgets/pcSocial.html',
            restrict: 'AE'
        };
        return directive;

        function link(scope, element, attrs) {
           // attrs.$set('class', 'plenty-logo');
        }

    }
}());
