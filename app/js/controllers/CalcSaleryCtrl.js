/*global eaccountingControllers */
/*global console */
/*global alert */
/*jshint globalstrict: true */


eaccountingControllers.controller('CalcSaleryCtrl', ['$scope',
    function ($scope) {
        'use strict';
        var eFee = (1 - 0.14), taxFee = 0.30325;
        //var eFee = (1 - 0.1489), taxFee = 0.30325;
          
        $scope.counteOwnWithdrawl = function () {
            console.log("i beräkna med ownWithdrawl");
            if ((typeof $scope.ownWithdrawl) === 'number') {
                $scope.count($scope.ownWithdrawl);
            } else {
                alert("Då måste ange ett hur stort det egna utaget ska vara");
            }
        };
        
        $scope.counteSaleryWithTax = function () {
            console.log("i beräkna Lön med skatt");
            if ((typeof $scope.saleryWithTax) === 'number') {
                $scope.count(Math.round($scope.saleryWithTax / eFee));
            } else {
                alert("Då måste ange ett hur mycket bruttolön du vill ha");
            }
        };
        
        $scope.counteTax = function () {
            console.log("i beräkna med skatt");
            if ((typeof $scope.tax) === 'number') {
                $scope.count(Math.round(($scope.tax / taxFee) / eFee));
            } else {
                alert("Då måste ange hur mycket skatt du vill betala");
            }
        };
        
        $scope.counteEmoloymentFee = function () {
            console.log("i beräkna med egenavgift");
            if ((typeof $scope.employmentFee) === 'number') {
                $scope.count(Math.round($scope.employmentFee / (1 - eFee)));
            } else {
                alert("Då måste ange hur mycket egenavgift du vill betala");
            }
        };
                            
        $scope.countSaleryWithOutTax = function () {
            console.log("i beräkna med nettolön");
            if ((typeof $scope.saleryWithOutTax) === 'number') {
                $scope.count(Math.round(($scope.saleryWithOutTax / (1 - taxFee)) / eFee));
            } else {
                alert("Då måste ange hur mycket nettolön du vill ha");
            }
        };
        
    
        $scope.count = function (ownWithdrawl) {
            $scope.ownWithdrawl = ownWithdrawl;
            $scope.saleryWithTax = Math.round(ownWithdrawl * eFee);
            $scope.tax = Math.round($scope.saleryWithTax * taxFee);
            $scope.employmentFee = Math.round(ownWithdrawl * (1 - eFee));
            $scope.saleryWithOutTax = Math.round($scope.saleryWithTax * (1 - taxFee));
        };
    }]);