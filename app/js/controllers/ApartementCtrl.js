/**
 * Created by joel on 2015-04-20.
 */
/*global eaccountingControllers */
/*global console */
/*global alert */
/*jshint globalstrict: true */


eaccountingControllers.controller('ApartementCtrl', ['$scope',
    function ($scope) {
        'use strict';
        var loan = 0;
        //var monthlyCost = 0;
        //var mothlyCostTaxDeduction = 0;
        var monthlyCostInterest = 0;
        var mothlyCostInterestTaxDeduction = 0;

        $scope.calculateCost = function () {
            console.log("i beräkna med kostnad");
            if ((typeof $scope.price) === 'number' && (typeof $scope.cash) === 'number' && (typeof $scope.interest) === 'number' && (typeof $scope.fee) === 'number') {
                //$scope.count($scope.ownWithdrawl);
                loan = $scope.price - $scope.cash;
                monthlyCostInterest = (loan * ($scope.interest*0.01))/12;
                mothlyCostInterestTaxDeduction = monthlyCostInterest * 0.7;
                $scope.monthlyCost = Math.round(monthlyCostInterest + $scope.fee);
                $scope.mothlyCostTaxDeduction = Math.round(mothlyCostInterestTaxDeduction + $scope.fee);
            } else {
                alert("Då måste ange alla värden för att kunna räkna ut kostnaden");
            }
        };
    }]);