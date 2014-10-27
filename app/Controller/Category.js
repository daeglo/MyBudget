/* jshint es3:true, browser:true */
/* global define:false */
define([
    'myBudget', 'Model/Category', 'Model/Item', 'Model/Periods',
    'text!View/Category.tpl', 'Service/EditItem'
], function (myBudget, Category, Item, Periods, tpl) {
    'use strict';

    categoryController.$inject = ['$scope', 'editItem'];

    function categoryController($scope, editItem) {
        $scope.editBudgetItem =
        /**
         * Edits an existing budget Item
         * @param {integer} index The index of the item to edit
         */
        function editBudgetItem(an_item) {
            editItem(an_item).result.then(function (new_item) {
                $scope.category.removeBudgetItem(an_item);
                $scope.category.addBudgetItem(new_item);

            });
        };

        $scope.newBudgetItem =
        /**
         * Adds a new budget item to the Category.
         */
        function newBudgetItem() {
            editItem(new Item()).result.then(function (an_item) {
                $scope.category.addBudgetItem(an_item);
            });
        };

        $scope.removeBudgetItem =
        /**
         * Removes a budget item from the Category
         */
        function removeBudgetItem(an_item) {
            $scope.category.removeBudgetItem(an_item);
        };

        $scope.Periods = Periods;
    }

    myBudget.directive('category', function () {
        return {
            restrict: 'E',
            scope: {
                category: '=',
                period: '='
            },
            replace: true,
            template: tpl,
            controller: categoryController
        };
    });

    return 'Controller/Category: Success';
});
