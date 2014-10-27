/* jshint es3:true, browser:true */
/* global define:false */
define([
    'myBudget', 'Model/Category', 'Model/Item', 'Model/Periods',
    'text!View/Category.tpl', 'text!View/EditItem.tpl'
], function (myBudget, Category, Item, Periods, tpl, editor) {
    'use strict';

    editorController.$inject = ['$scope', '$modalInstance', 'item'];

    function editorController($scope, $modalInstance, item) {
        $scope.Period = Periods;
        $scope.item = {};
        $scope.item.name = item.name;
        $scope.item.amount = item.amount;
        $scope.item.period = item.period;

        $scope.ok = function () {
            item.name = $scope.item.name;
            item.amount = $scope.item.amount;
            item.period = $scope.item.period;

            $modalInstance.close(item);
        };
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }

    categoryController.$inject = ['$scope', '$modal'];

    function categoryController($scope, $modal) {
        /**
         * Sets an item into edit mode
         * @param {Item} an_item The item to edit
         * @return {Promise<Item>} The edited item
         */
        function edit(an_item) {
            return $modal.open({
                template: editor,
                controller: editorController,
                resolve: {
                    item: function () {
                        return an_item;
                    }
                },
                backdrop: 'static'
            });
        }

        $scope.edit =
        /**
         * Edits an existing budget Item
         * @param {integer} index The index of the item to edit
         */
        function editBudgetItem(index) {
            edit($scope.category.items[index]).result.then(function (an_item) {
                $scope.category.items[index] = an_item;
            });
        };

        $scope.newBudgetItem =
        /**
         * Adds a new budget item to the Category.
         */
        function newBudgetItem() {
            edit(new Item('', 0, $scope.period)).result.then(function (an_item) {
                $scope.category.addBudgetItem(an_item);
            });
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
