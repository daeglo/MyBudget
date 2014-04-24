/* jshint es3:true, browser:true */
/* globals require */

require.config({
    paths: {
        angular: "../lib/angular",
        domReady: "../lib/domReady",
        highcharts: "../lib/highcharts-ng",
        jquery: "../lib/jquery-1.11.0",
        lodash: "../lib/lodash",
        require: "../lib/require",
        text: "../lib/text",
        'ui.router': "../lib/angular-ui-router",
        'ui.bootstrap': "../lib/ui-bootstrap-tpls-0.10.0"
    },
    shim: {
        angular: {
            exports: "angular"
        },
        highcharts: ["../lib/highcharts-standalone", "../lib/highcharts", "angular"],
        'ui.router': ["angular"],
        'ui.bootstrap': ["angular"]
    },
    deps: ["app"]
});
