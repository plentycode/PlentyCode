(function () {
    'use strict';
    angular
            .module('app.home')
            .controller('Home', Home);

    Home.$inject = [];

    function Home() {
        var vm = this;
        vm.title = 'Welcome!';
    }
}());
