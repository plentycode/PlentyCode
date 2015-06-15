(function () {
    'use strict';
    angular.module('app.layout')
            .controller('Shell', Shell);

    /* @ngInject */
    function Shell($scope, $timeout) {
        var shell = this;
        shell.expandedView = false;
        shell.toggleView = toggleView;
        shell.status = 'ready';

         $scope.$on('TOGGLE_VIEW', shell.toggleView);

        function toggleView() {
            shell.expandedView = !shell.expandedView;
        }
    }
}());
