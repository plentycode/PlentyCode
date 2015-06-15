require('angular');
require('angular-mocks');
require('angular-ui-router');
require('./');


describe('contact-us', function () {
    'use strict';

    var deferred, scope, vm, mockService;

    beforeEach(function () {
        angular.mock.module('app.contact');
        inject(function ($q) {
            deferred = $q.defer();
        });
        mockService = {};

        mockService.sendEmail = function () {
            deferred.resolve({});
            return deferred.promise;
        };

        //injects angular scopes to the controller
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            vm = $controller('Contact', {
                $scope: scope,
                dataservice : mockService
            });
        });
    });
    describe('Controller: ', function () {
        it('should have a controller', function () {
            expect(vm).toBeDefined();
        });

        it('should have a title', function () {
            expect(vm.title).toBeDefined();
        });

        it('should say title is Contact Us', function () {
            expect(vm.title).toBe('Contact Us');
        });

        describe('send email', function () {
            it('should have a sendEmail function', function () {
                expect(vm.sendEmail).toBeDefined();
            });

            it('should have placeholder for the response',  function () {
                expect(vm.response).toBeDefined();
            });

            it('should be empty if the services is not called',  function () {
                expect(vm.response).toBe(false);
            });

            it('should call send email from dataservice', function () {
                spyOn(mockService, 'sendEmail').and.callThrough();
                vm.sendEmail();

                expect(mockService.sendEmail).toHaveBeenCalled();
            });

            it('should say when the message is sent', function () {
                spyOn(mockService, 'sendEmail').and.callThrough();

                expect(vm.response).toBeFalsy();

                vm.sendEmail().then(function(res) {
                    expect(vm.response).toBeTruthy();
                    expect(vm.response.success).toBeTruthy();
                });
            });

            it('should return an error when the request fails', function () {
                spyOn(mockService, 'sendEmail').and.callFake(function () {
                     deferred.reject({success : false, message : 'error'});
                    return deferred.promise;
                });

                expect(vm.response).toBeFalsy();

                vm.sendEmail().catch(function(err) {
                    expect(err).toBeFalsy();
                });
            });
        });
    });
});
