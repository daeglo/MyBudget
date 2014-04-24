/* jshint es3:true, browser:true */
/* globals define */

define([
    'angular', 'ui.router', 'ui.bootstrap', 'highcharts'
], function (angular) {
    'use strict';
    var myBudget = angular.module('MyBudget', ['ui.router', 'ui.bootstrap', 'highcharts-ng']);
    myBudget.config([
        '$urlRouterProvider',
        function ($urlRouterProvider) {
            $urlRouterProvider.when('', '/Budget').
            otherwise('/Budget');
        }
    ]);

    return myBudget;
});
