/* jshint es3:true */
/* globals define */
define(['Model/Category'], function (Category) {
    'use strict';

    function Budget() {
        this.income = new Category('Income');
        this.expenses = new Category('Expenses');
        this.savings = new Category('Savings');
    }

    return Budget;
});
