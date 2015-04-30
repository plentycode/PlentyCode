(function () {
    angular.module('app.layout')
            .controller('Shell', Shell);

    Shell.$inject = ['$timeout'];

    function Shell($timeout) {
        var vm = this;
        vm.expandedView = false;
        vm.toggleView = toggleView;

        function toggleView() {
            vm.expandedView = !vm.expandedView;
        }
    }
    
}());