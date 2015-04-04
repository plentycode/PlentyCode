(function () {
    angular.module('app.layout')
            .controller('Shell', Shell);

    Shell.$inject = ['$timeout', '$location'];

    function Shell($timeout, $location) {
        var vm = this;
        vm.expandedView = false;
        vm.toggleView = toggleView;

        function toggleView() {
            vm.expandedView = !vm.expandedView;
        }
    }
    
}());