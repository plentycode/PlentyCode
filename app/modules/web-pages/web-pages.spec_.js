require('angular');
require('angular-mocks');
require('angular-ui-router');
require('./');


describe('web-pages', function () {
    'use strict';

    var deferred, scope, web, $stateParams, rootScope;

    beforeEach(function () {
        angular.mock.module('app.webpages');
        inject(function ($q) {
            deferred = $q;
        });

        var mockedDeferred = deferred(function (resolve, reject) {
            resolve({});
        });
		
        //injects angular scopes to the controller
        inject(function ($controller, _$rootScope, _$stateParams_) {
            scope = _$rootScope.$new();
            web = $controller('WebPages', {                
                $scope: scope,
                $stateParams: _$stateParams_,
                $rootScope: _$rootScope
            });
        });
    });
    describe('Controller: ', function () {
        it('should have a controller', function () {
            expect(web).toBeDefined();
        });
        it('should have a title', function () {
            expect(web.title).toBeDefined();
        });
        it('should say title is Contact Us', function () {
            expect(web.title).toBe('Contact Us');
        });
    });
});