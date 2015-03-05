/*global angular*/
/* jshint globalstrict: true */

/* Adress to the API */
var apiAdress = "http://localhost:5001/";

/* Controllers Module */
var eaccountingControllers = angular.module('eaccountingControllers', []);

/* Factories Module */
var eaccountingFactories = angular.module('eaccountingFactories', ['ngResource']);

/* App Module */

var eaccounting = angular.module('eaccounting', [
        'ngRoute',
        'eaccountingControllers',
        'eaccountingFactories',
        'ui.bootstrap'
    ]);

// Set up cross browser request for ease of testing
eaccounting.config(['$httpProvider', function ($httpProvider) {
    'use strict';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.useXDomain = true;
}]);

eaccounting.config(function ($sceDelegateProvider) {
    'use strict';
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        apiAdress + '/**']);
});

eaccounting.config(['$routeProvider',
    function ($routeProvider) {
        'use strict';
        $routeProvider.
            when('/', {
//                templateUrl: 'partials/login.php',
//                controller: 'LoginCtrl'
                templateUrl: 'partials/calcSaleryView.html',
                controller: 'CalcSaleryCtrl'
            }).
            when('/salery', {
                templateUrl: 'partials/calcSaleryView.html',
                controller: 'CalcSaleryCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);


