/* jshint es3:true, browser:true */
/* globals require */

require([
    'domReady', 'angular', 'myBudget', 'Controller/Budget'
], function (domReady, angular) {
    'use strict';

    domReady(function () {
        angular.bootstrap(document, ['MyBudget']);
    });
});
