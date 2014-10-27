/* jshint es3:true, browser:true */
/* global define:false */

define(["myBudget", "Model/Periods", "text!View/PeriodPicker.tpl"], function (myBudget, Periods, tpl) {
    'use strict';

    periodPickerController.$inject = ['$scope'];

    function periodPickerController($scope) {
        $scope.Periods = Periods
        $scope.period = $scope.period || 'PerMonth';

        $scope.set = function (a_period) {
            $scope.period = a_period;
        }
    }

    myBudget.directive('periodPicker', function () {
        return {
            restrict: 'E',
            scope: {
                period: '='
            },
            replace: true,
            template: tpl,
            controller: periodPickerController
        };
    });
});
