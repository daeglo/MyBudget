/* jshint es3:true */
/* globals define:false */
define(['Model/Period', 'lodash'], function (Period, _) {
    'use strict';

    /**
     * A collection of budget items which acts like a budget item
     * @param {String} a_name a description of the category
     * @param {Number} an_amount The value of this category over a_period
     * @param {Period} a_period The period in which this category cycles
     * @param {Array<Item>} sub_items A collection of items providing more detail
     */
    function Category(a_name, an_amount, a_period, sub_items) {
        var myAmount = an_amount || 0,
            myItems = [],
            subTotal = function () {
                if (myItems.length !== 0) {
                    return _.map(myItems, function (item) {
                        return item.per(a_period);
                    }).
                    reduce(function (sum, item) {
                        return sum + item;
                    });
                }
                return 0;
            },
            getAmount = function () {
                return myAmount;
            },
            setAmount = function (an_amount) {
                var subt = subTotal();
                if (an_amount < subt) {
                    throw 'Must be greater than the sum of it\'s parts';
                }
                myAmount = an_amount - subt;
            };

        this.name = a_name;
        this.period = a_period || Period.PerMonth;

        Object.defineProperties(this, {
            amount: {
                enumerable: true,
                get: getAmount,
                set: setAmount
            },
            items: {
                enumerable: true,
                get: function () {
                    return myItems;
                }
            }
        });

        this.per =
        /**
         * Amortizes the value of this item over a_period
         * @param {Period} a_period The period to evaluate
         * @returns {number} The amortized value
         */
        function per(a_period) {
            var value = myAmount / this.period.multiplier * a_period.multiplier;
            value += subTotal();
            return value;
        };

        this.addBudgetItem =
        /**
         * Adds an_item to this category
         * @param {Item} an_item The item to add
         */
        function addBudgetItem(an_item) {
            myAmount -= an_item.per(this.period);
            myItems.push(an_item);
        };

        this.removeBudgetItem =
        /**
         * Removes an_item from this category
         * @param {Item} an_item The item to remove
         */
        function removeBudgetItem(an_item) {
            _.remove(myItems, an_item);
        };

        sub_items = sub_items || [];
        for (var i = 0; i < sub_items.length; i++) {
            this.addBudgetItem(sub_items[i]);
        }
    }

    return Category;
});
