/* jshint es3:true */
/* globals define:false */
define(['Model/Periods'], function (Periods) {
    'use strict';

    /**
     * An item in a budget.
     * @param {string} a_name A description of this item
     * @param {number} an_amount the value of this item over a_period
     * @param {Period} a_period The period which this item spans
     */
    function Item(a_name, an_amount, a_period) {
        this.name = a_name || '';
        this.amount = an_amount || 0;
        this.period = a_period || 'PerMonth';
    }

    Item.prototype.per =
    /**
     * Amortizes the value of this item over a_period
     * @param {string} a_period The period to evaluate
     * @returns {number} The amortized value
     */
    function per(a_period) {
        return this.amount / Periods[this.period].multiplier * Periods[a_period].multiplier;
    };

    return Item;
});
