require([
    'angular',
    'angular-route',
    //'app/router/router.module',
    'app/layout/layout.module',
    'app/widgets/widgets.module',
    'app/layout/shell',
    'app/widgets/pcLogo'


], function (angular) {
    //adds the applications modules
    angular.module('app', [
        'app.layout',
        'app.widgets'
    ]);
});