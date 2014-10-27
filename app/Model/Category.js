/* jshint es3:true */
/* globals define:false */
define(['lodash'], function (_) {
    'use strict';

    /**
     * A collection of budget items which acts like a budget item
     * @param {String} a_name a description of the category
     * @param {Period} a_period The period in which this category cycles
     * @param {Array<Item>} sub_items A collection of items providing more detail
     */
    function Category(a_name, sub_items) {
        var m_items = [];

        if (sub_items && sub_items.length) {
            for (var i = 0; i < sub_items.length; i++) {
                addBudgetItem(sub_items[i]);
            }
        }

        /**
         * Adds an_item to this category
         * @param {Item} an_item The item to add
         */
        function addBudgetItem(an_item) {
            m_items.push(an_item);
        }

        /**
         * Removes an_item from this category
         * @param {Item} an_item The item to remove
         */
        function removeBudgetItem(an_item) {
            _.remove(m_items, an_item);
        }

        /**
         * Amortizes the value of this item over a_period
         * @param {string} a_period The period to evaluate
         * @returns {number} The amortized value
         */
        function per(a_period) {
            var items = getItems();
            if (!items.length) {
                return 0;
            }

            return _.reduce(getItems(), function (sum, item) {
                sum += item.per(a_period);
                return sum;
            }, 0);
        }

        /**
         * Gets an array of Items contained in this Category
         * @returns {Array<Item>} Items contained in this Category
         */
        function getItems() {
            return _.clone(m_items);
        }

        this.name = a_name;

        this.addBudgetItem = addBudgetItem;
        this.removeBudgetItem = removeBudgetItem;
        this.getItems = getItems;
        this.per = per;
    }

    return Category;
});
