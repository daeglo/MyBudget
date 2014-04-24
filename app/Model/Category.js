/* jshint es3:true */
/* globals define:false */

define(['lodash'], function (_) {
    'use strict';

    /**
     * A collection of budget items which acts like a budget item
     * @param a_name {string} a description of the category
     * @param an_items {array<Item>} a collection of items
     */
    function Category(a_name, an_items) {
        this.name = a_name;
        this.items = an_items || [];

        this.per = function per(a_period) {
            if (this.items.length === 0) {
                return 0;
            }
            return _.map(this.items, function (item) {
                return item.per(a_period);
            }).
            reduce(function (sum, item) {
                return sum + item;
            });
        };
        this.addBudgetItem = function addBudgetItem(an_item) {
            this.items.push(an_item);
        };
        this.removeBudgetItem = function removeBudgetItem(an_item) {
            _.remove(this.items, an_item);
        };
    }

    return Category;
});
