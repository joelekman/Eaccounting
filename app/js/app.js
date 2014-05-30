  'use strict';

/* global angular */
/* jshint globalstrict: true */

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

/*eaccounting.config(['$httpProvider', function($httpProvider) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.useXDomain = true;
    }
]); */

/*eaccounting.config(function($sceDelegateProvider) {
     $sceDelegateProvider.resourceUrlWhitelist([
       // Allow same origin resource loads.
       'self',
       // Allow loading from our assets domain.  Notice the difference between * and **.
       serverAdress+'/**']);  
      });*/

eaccounting.config(['$routeProvider',
  function($routeProvider) { 
    $routeProvider.
      when('/', {
        templateUrl: 'partials/calcSaleryView.html',
        controller: 'CalcSaleryCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);


