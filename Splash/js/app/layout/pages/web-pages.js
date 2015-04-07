(function () {
    'use strict';
    var _ = require('lodash');

    angular
            .module('app.layout')
            .controller('WebPages', WebPages);

    function WebPages($rootScope, $stateParams) {
        var vm = this;
        vm.title = 'Web Pages';
        $rootScope.selectedItem = $stateParams.item;

        var list = [
            {
                display: 'Web Sites',
                url: 'web-sites',
                icon: 'earth',
                selected: true
            },
            {
                display: 'Design',
                url: 'design',
                icon: 'paint-format'
            },
            {
                display: 'Usability',
                url: 'usability',
                icon: 'accessibility'
            }
        ];
        _(list).each(function (item) {
            item.selected($rootScope.selectedItem === item.url);

        });
        $rootScope.tabList = list;
    }
}());