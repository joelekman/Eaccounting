'use strict';

/* global eaccountingControllers */
/* global console */
/* global alert */
/* jshint globalstrict: true */


eaccountingControllers.controller('CalcSaleryCtrl', ['$scope', 
    function ($scope) {
        console.log("test");
        var eFee = (1-0.1488);
        var taxFee = 0.3048;

                       /* double tax = (salery*0.3048);
						double eFee = (salery/0.8512)-salery;
						double taxEfee = tax + eFee;
						double withdraw = (salery/0.8512);
						double saleryAfterTax = salery - tax;*/
          
          
        $scope.counteFromSaleryWithTax = function() {
            console.log("i beräkna med skatt");
            /*if ($scope.saleryWithTax !== undefined){*/
               $scope.count(Math.round($scope.saleryWithTax/eFee));
           /* } else {
                alert("Då måste ange ett hur mycket bruttolön du vill ha");
            }*/
        };
    
        $scope.count = function (ownWithdrawl){
            $scope.ownWithdrawl = ownWithdrawl;
            $scope.saleryWithTax = Math.round(ownWithdrawl*eFee);
            $scope.tax = Math.round($scope.saleryWithTax*taxFee);
            $scope.employmentFee = Math.round(ownWithdrawl*(1-eFee));
            $scope.saleryWithOutTax = Math.round($scope.saleryWithTax*(1-taxFee));
        };
    }
]);