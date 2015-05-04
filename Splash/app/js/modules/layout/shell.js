(function () {
    'use strict';
    angular.module('app.layout')
            .controller('Shell', Shell);

    Shell.$inject = ['$timeout'];

    function Shell($timeout) {
        var shell = this;
        shell.expandedView = false;
        shell.toggleView = toggleView;

        function toggleView() {
            shell.expandedView = !shell.expandedView;
        }
    }    
}());