/* jshint es3:true, browser:true */
/* globals define:false */

define([
    'myBudget', 'Model/Budget', 'Model/Periods', 'text!View/Budget.tpl', 'lodash', 'Controller/Category', 'Controller/PeriodPicker', 'ui.router', 'highcharts', 'Service/budgetRepository'
], function (myBudget, Budget, Period, tpl, _) {
    'use strict';

    budgetController.$inject = ['$scope', 'budgetRepository'];

    function budgetController($scope, budgetRepository) {
        var budget = $scope.budget = budgetRepository.loadBudget() || new Budget();
        $scope.period = 'PerMonth';
        $scope.Period = Period;

        function update() {
            var income = $scope.budget.income.per($scope.period),
                expenses = $scope.budget.expenses.per($scope.period),
                out = _.union($scope.budget.expenses.getItems(), $scope.budget.savings.getItems()),
                difference = income - expenses,
                overage = $scope.budget.savings.getItems()[0];

            if (overage) {
                overage.amount = difference;
                overage.period = $scope.period;
            }

            $scope.summaryChart.series[0].data = _.map(out, function (item) {
                return {
                    name: item.name,
                    y: item.per($scope.period)
                };
            });

            budgetRepository.saveBudget(budget);
        }

        $scope.$watch('budget.income', update, true);
        $scope.$watch('budget.expenses', update, true);
        $scope.$watch('budget.savings', update, true);
        $scope.$watch('period', update);

        $scope.summaryChart = {
            options: {
                chart: {
                    type: 'pie'
                }
            },
            series: [{
                name: "Expenses",
                data: []
            }],
            title: {
                text: 'Budget Summary'
            },
            credits: {
                enabled: true
            }
        };

        update();
    }

    myBudget.config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('Budget', {
                url: '/Budget',
                controller: budgetController,
                template: tpl
            });
        }]);

    return 'Controller/Budget: Success';
});
