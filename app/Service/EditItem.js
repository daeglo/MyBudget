/* jshint es3:true, browser:true */
/* global define:false */
define([
    'myBudget', 'Model/Periods',
    'text!View/EditItem.tpl'
], function (myBudget, Periods, editor) {
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

    editItemService.$inject = ['$modal'];

    function editItemService($modal) {
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

        return edit;
    }

    myBudget.factory('editItem', editItemService);

    return 'Service/EditItem: Success';
});
