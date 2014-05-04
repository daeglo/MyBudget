/* jshint es3:true, browser:true */
/* globals define:false */

define([
    'myBudget', 'Model/Budget', 'Model/Period', 'text!View/Budget.tpl', 'lodash', 'Controller/Category', 'ui.router', 'highcharts', 'Service/budgetRepository'
], function (myBudget, Budget, Period, tpl, _) {
    'use strict';

    budgetController.$inject = ['$scope', 'budgetRepository'];

    function budgetController($scope, budgetRepository) {
        var budget = $scope.budget = budgetRepository.loadBudget() || new Budget();
        $scope.period = Period.PerMonth;
        $scope.Period = Period;

        function update() {
            var income = $scope.budget.income.per($scope.period),
                expenses = $scope.budget.expenses.per($scope.period),
                out = _.union($scope.budget.expenses.items, $scope.budget.savings.items),
                difference = income - expenses;

            $scope.budget.savings.amount = difference;

            $scope.summaryChart.series[0].data = _.map(out, function (item) {
                return {
                    name: item.name,
                    y: item.per($scope.period)
                };
            });

            budgetRepository.saveBudget(budget);
        }

        $scope.$watch('budget', update, true);

        $scope.set = function (a_period) {
            $scope.period = a_period;
            update();
        };
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
