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
            var budget = new Budget(),
                data;

            try {
                data = angular.fromJson(storage.myBudget);
            } catch (e) {
                $window.console.log('unable to retrieve budget', e);
            }

            for (var category in data) {
                if (data[category].items && data[category].name) {
                    var categoryItems = mapItems(data[category].items);
                    budget[category] = new Category(data[category].name, categoryItems);
                }
            }

            return budget;
        }

        function saveBudget(a_budget) {
            var budget = a_budget;

            for (var category in budget) {
                if (budget[category].getItems) {
                    budget[category].items = budget[category].getItems();
                }
            }

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
