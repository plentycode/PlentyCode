(function(){
    'use strict';
    angular.module('app.core')
            .factory('dataservice', dataservice);

     /* @ngInject */
    function dataservice($http, $q) {
        var apiUrl = 'http://api-plentycode.herokuapp.com',
        service = {
            sendEmail : sendEmail

        };

        return service;

        function sendEmail(email) {
            email.Source = "Plentycode";

            return $http.post(apiUrl + '/sendemail', JSON.stringify(email)).then(function (data) {
                data.message = "Thanks for contacting us!";
                return data;
            }, function (error) {
                error.message = "Sorry an error has ocurred, try again later!";
                return error;
            });
        }
    }

}());
