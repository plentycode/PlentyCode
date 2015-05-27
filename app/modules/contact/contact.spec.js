require('angular');
require('angular-mocks');
require('angular-ui-router');
require('./');


describe('contact-us', function () {
    'use strict';

    var deferred, scope, contact, translateServiceMock, dataservice;

    beforeEach(function () {
        angular.mock.module('app.contact');
        inject(function ($q) {
            deferred = $q;
        });

        var mockedDeferred = deferred(function (resolve, reject) {
            resolve({});
        });
		
        //injects angular scopes to the controller
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            contact = $controller('Contact', {
                $scope: scope
            });
        });
    });
    describe('Controller: ', function () {
        it('should have a controller', function () {
            expect(contact).toBeDefined();
        });
        it('should have a title', function () {
            expect(contact.title).toBeDefined();
        });
        it('should say title is Contact Us', function () {
            expect(contact.title).toBe('Contact Us');
        });
    });
});