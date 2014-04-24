/* jshint es3:true */
/* globals define:false, angular:false */

define(['myBudget', 'Model/Budget', 'Model/Category', 'Model/Item'], function (myBudget, Budget, Category, Item) {
    'use strict ';

    budgetRepository.$provide = ['$window'];

    function budgetRepository($window) {
        var storage = $window.localStorage;

        function mapItems(items) {
            var i, result = [];
            for (i = 0; i < items.length; i++) {
                var item = items[i];
                result.push(new Item(item.name, item.amount, item.period));
            }
            return result;
        }

        function loadBudget() {
            var budget = new Budget();

            try {
                var data = angular.fromJson(storage.myBudget),
                    incomeItems = mapItems(data.income.items),
                    expenseItems = mapItems(data.expenses.items),
                    savingsItems = mapItems(data.savings.items);
                budget.income = new Category(data.income.name, incomeItems);
                budget.expenses = new Category(data.expenses.name, expenseItems);
                budget.savings = new Category(data.savings.name, savingsItems);

            } catch (e) {
                $window.console.log('unable to retrieve budget', e);
            }

            return budget;
        }

        function saveBudget(a_budget) {
            storage.myBudget = angular.toJson(a_budget);
        }

        return {
            loadBudget: loadBudget,
            saveBudget: saveBudget
        };
    }

    myBudget.factory('budgetRepository', budgetRepository);

    return 'Service/budgetRepository: Success';
});
