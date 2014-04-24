/* jshint es3:true, browser:true */
/* global define:false */

define([
    'myBudget', 'Model/Item', 'Model/Period', 'text!View/Category.tpl', 'text!View/EditItem.tpl'
], function (myBudget, Item, Period, tpl, editor) {
    'use strict';

    editorController.$inject = ['$scope', '$modalInstance', 'item'];

    function editorController($scope, $modalInstance, item) {
        $scope.Period = Period;
        $scope.item = new Item(item.name, item.amount, item.period);
        $scope.set = function (a_period) {
            $scope.item.period = a_period;
        };
        $scope.ok = function () {
            $modalInstance.close($scope.item);
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
                backtdrop: 'static'
            });
        }
        /**
         * Edits an existing budget Item
         * @param {integer} index The index of the item to edit
         */
        function editBudgetItem(index) {
            edit($scope.category.items[index]).result.then(function (an_item) {
                $scope.category.items[index] = an_item;
            });
        }
        /**
         * Adds a new budget item to the Category.
         */
        function newBudgetItem() {
            edit(new Item('', 0, $scope.period)).result.then(function (an_item) {
                $scope.category.addBudgetItem(an_item);
            });
        }

        $scope.newBudgetItem = newBudgetItem;
        $scope.edit = editBudgetItem;
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
