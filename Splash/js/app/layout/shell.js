require([
    'angular',
], function (angular) {
    angular
            .module('app.layout')
            .controller('Shell', Shell);

    Shell.$inject = ['$timeout'];

    function Shell($timeout) {
        
        var vm = this;
        vm.message='Hey there!!';
    }
});