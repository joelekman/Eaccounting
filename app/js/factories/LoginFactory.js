/*global eaccountingFactories */
/*global apiAdress */
/*global console */
/*global angular */
/*global alert */
/*jshint globalstrict: true */

eaccountingFactories.factory('LoginFactory', ['$resource', '$http', '$q', function ($resource, $http, $q) {
    'use strict';
    return {
        login: function (form) {
            console.log(form);
            var param = {email: form.email, p: form.p};
            return $http.post(apiAdress + 'includes/process_login.php', angular.toJson(param, [false]))
                .then(function (response) {
                    //SUCCESS, YAY!
                    if (typeof response.data === 'object') {
                        // Den fick tillbaka rätt data
                        return response.data;
                    } else {
                        // invalid response
                        console.log("Invalid request");
                        return $q.reject(response.data);
                    }
                }, function (response) {
                    // something went wrong 
                    alert("The server is temporarily unavailable.");
                    return $q.reject(response.data);
                });
        }
    };
}]);