(function () {
    angular
        .module('app.layout')
        .controller('Shell', Shell);

    Shell.$inject = ['$timeout'];

    function Shell($timeout) {
        var vm = this;
        $timeout(function () {
            vm.message = 'Hey there!!';
        }, 3000); 
    }
}());