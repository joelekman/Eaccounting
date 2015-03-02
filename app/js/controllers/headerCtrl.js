/*global eaccountingControllers */
/*global console */
/*global alert */
/*jshint globalstrict: true */

eaccountingControllers.controller('HeaderCtrl', ['$scope', '$location',
    function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }]);