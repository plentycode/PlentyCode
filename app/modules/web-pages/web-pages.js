(function () {
    'use strict';
    var _ = require('lodash');

    angular
        .module('app.webpages')
        .controller('WebPages', WebPages);

    function WebPages($rootScope, $stateParams) {
        var vm = this;
        vm.title = 'Be known!';
        $rootScope.selectedItem = $stateParams.item || 'web-sites';

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
        
        list.map(function (item) {
            item.selected = ($rootScope.selectedItem === item.url);
            return item;
        });
        $rootScope.tabList = list;
    }
}());