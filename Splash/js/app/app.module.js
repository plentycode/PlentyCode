require([
    'angular',
    'app/layout/layout.module',
    'app/widgets/widgets.module'
], function (angular) {
    //adds the applications modules
    angular.module('app', [
        'app.layout',
        'app.widgets'
    ]);
});