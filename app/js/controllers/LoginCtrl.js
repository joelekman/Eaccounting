/*global console*/
/*global eaccountingControllers*/
/*global hex_sha512*/

eaccountingControllers.controller('LoginCtrl', ['$scope', 'LoginFactory', function ($scope, LoginFactory) {
    'use strict';
    $scope.formhash = function (login) {
    // Create a new element input, this will be our hashed password field. 
       // var p = document.createElement("input");
        //console.log(p);
        // Add the new element to our form. 
        //login.appendChild(p);
       // p.name = "p";
        //p.type = "hidden";
        login.p = hex_sha512(login.password);

        // Make sure the plaintext password doesn't get sent. 
        login.password = "";

        // Finally submit the form. 
        LoginFactory.login(login);
    };
}]);