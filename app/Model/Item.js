/* jshint es3:true */
/* globals define */

define([], function () {
    'use strict';

    /**
     * Creates an item with the given name for the given amount per period.
     * @param {string} name A description of the Item
     * @param {float} amount The amount of this Item
     * @param {Period} period The period in which this Item recurs
     */
    function Item(a_name, an_amount, a_period) {
        this.name = a_name;
        this.amount = an_amount;
        this.period = a_period;

        this.per = function per(a_period) {
            return this.amount / this.period.multiplier * a_period.multiplier;
        };
    }

    return Item;
});
