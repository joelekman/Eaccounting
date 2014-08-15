/*global describe*/
/*global beforeEach*/
/*global module*/
/*global it*/
/*global inject*/
/*global expect*/

/* jasmine specs for controllers go here */

describe('Test controllers', function () {
    'use strict';

    beforeEach(module('eaccounting'));

    describe('CalcSaleryCtrl with 2014 figures for people that are born 1988 or later', function () {
        var scope, ctrl;
        
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('CalcSaleryCtrl', {$scope: scope});
        }));
        
        // Count from ownwithdrawl
        
        it('Count from ownwithdrawl | ownwithdrawl', function ($rootScope, $controller) {
            scope.ownWithdrawl = 30000;
            scope.counteOwnWithdrawl();
            expect(scope.ownWithdrawl).toBe(30000);
        });
        
        it('Count from ownwithdrawl | Salery with tax', function ($rootScope, $controller) {
            scope.ownWithdrawl = 30000;
            scope.counteOwnWithdrawl();
            expect(scope.saleryWithTax).toBe(25533);
        });
        
        it('Count from ownwithdrawl | Salery without tax', function ($rootScope, $controller) {
            scope.ownWithdrawl = 30000;
            scope.counteOwnWithdrawl();
            expect(scope.saleryWithOutTax).toBe(17790);
        });
        
        it('Count from ownwithdrawl |Tax', function ($rootScope, $controller) {
            scope.ownWithdrawl = 30000;
            scope.counteOwnWithdrawl();
            expect(scope.tax).toBe(7743);
        });
        
        it('Count from ownwithdrawl |Employment fee', function ($rootScope, $controller) {
            scope.ownWithdrawl = 30000;
            scope.counteOwnWithdrawl();
            expect(scope.employmentFee).toBe(4467);
        });
        
        // Count from salery with tax
        
        it('Count from salery with tax | ownwithdrawl', function ($rootScope, $controller) {
            scope.saleryWithTax = 25000;
            scope.counteSaleryWithTax();
            expect(scope.ownWithdrawl).toBe(29374);
        });
        
        it('Count from salery with tax | Salery with tax', function ($rootScope, $controller) {
            scope.saleryWithTax = 25000;
            scope.counteSaleryWithTax();
            expect(scope.saleryWithTax).toBe(25000);
        });
        
        it('Count from salery with tax | Salery without tax', function ($rootScope, $controller) {
            scope.saleryWithTax = 25000;
            scope.counteSaleryWithTax();
            expect(scope.saleryWithOutTax).toBe(17419);
        });
        
        it('Count from salery with tax |Tax', function ($rootScope, $controller) {
            scope.saleryWithTax = 25000;
            scope.counteSaleryWithTax();
            expect(scope.tax).toBe(7581);
        });
        
        it('Count from salery with tax |Employment fee', function ($rootScope, $controller) {
            scope.saleryWithTax = 25000;
            scope.counteSaleryWithTax();
            expect(scope.employmentFee).toBe(4374);
        });
        
        // Count from tax
        
        it('Count from tax | ownwithdrawl', function ($rootScope, $controller) {
            scope.tax = 8000;
            scope.counteTax();
            expect(scope.ownWithdrawl).toBe(30996);
        });
        
        it('Count from tax | Salery with tax', function ($rootScope, $controller) {
            scope.tax = 8000;
            scope.counteTax();
            expect(scope.saleryWithTax).toBe(26381);
        });
        
        it('Count from tax | Salery without tax', function ($rootScope, $controller) {
            scope.tax = 8000;
            scope.counteTax();
            expect(scope.saleryWithOutTax).toBe(18381);
        });
        
        it('Count from tax |Tax', function ($rootScope, $controller) {
            scope.tax = 8000;
            scope.counteTax();
            expect(scope.tax).toBe(8000);
        });
        
        it('Count from tax |Employment fee', function ($rootScope, $controller) {
            scope.tax = 8000;
            scope.counteTax();
            expect(scope.employmentFee).toBe(4615);
        });
        
        // Count from Employment fee
        
        it('Count from Employment fee | ownwithdrawl', function ($rootScope, $controller) {
            scope.employmentFee = 4000;
            scope.counteEmoloymentFee();
            expect(scope.ownWithdrawl).toBe(26864);
        });
        
        it('Count from Employment fee | Salery with tax', function ($rootScope, $controller) {
            scope.employmentFee = 4000;
            scope.counteEmoloymentFee();
            expect(scope.saleryWithTax).toBe(22864);
        });
        
        it('Count from Employment fee | Salery without tax', function ($rootScope, $controller) {
            scope.employmentFee = 4000;
            scope.counteEmoloymentFee();
            expect(scope.saleryWithOutTax).toBe(15930);
        });
        
        it('Count from Employment fee |Tax', function ($rootScope, $controller) {
            scope.employmentFee = 4000;
            scope.counteEmoloymentFee();
            expect(scope.tax).toBe(6934);
        });
        
        it('Count from Employment fee |Employment fee', function ($rootScope, $controller) {
            scope.employmentFee = 4000;
            scope.counteEmoloymentFee();
            expect(scope.employmentFee).toBe(4000);
        });
        
        // Count from salery without tax
        
        it('Count from salery without tax | ownwithdrawl', function ($rootScope, $controller) {
            scope.saleryWithOutTax = 20000;
            scope.countSaleryWithOutTax();
            expect(scope.ownWithdrawl).toBe(33727);
        });
        
        it('Count from salery without tax | Salery with tax', function ($rootScope, $controller) {
            scope.saleryWithOutTax = 20000;
            scope.countSaleryWithOutTax();
            expect(scope.saleryWithTax).toBe(28705);
        });
        
        it('Count from salery without tax | Salery without tax', function ($rootScope, $controller) {
            scope.saleryWithOutTax = 20000;
            scope.countSaleryWithOutTax();
            expect(scope.saleryWithOutTax).toBe(20000);
        });
        
        it('Count from salery without tax |Tax', function ($rootScope, $controller) {
            scope.saleryWithOutTax = 20000;
            scope.countSaleryWithOutTax();
            expect(scope.tax).toBe(8705);
        });
        
        it('Count from salery without tax |Employment fee', function ($rootScope, $controller) {
            scope.saleryWithOutTax = 20000;
            scope.countSaleryWithOutTax();
            expect(scope.employmentFee).toBe(5022);
        });
    });
});
