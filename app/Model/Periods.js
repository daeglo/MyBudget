/* jshint es3:true */
/* globals define */

define([], function () {
    function Period(description, suffix, multiplier) {
        this.description = description;
        this.suffix = suffix;
        this.multiplier = multiplier;
    }

    Period.prototype.toString = function toString() {
        return 'Period: ' + this.suffix;
    };

    return {
        PerDay: new Period('Daily', '/day', 1 / 365),
        PerWeek: new Period('Weekly', '/week', 1 / 52),
        PerBiWeek: new Period('Biweekly', '/2 weeks', 1 / 26),
        PerSemiMonth: new Period('SemiMonthly', '/½ month', 1 / 24),
        PerMonth: new Period('Monthly', '/month', 1 / 12),
        PerAnnum: new Period('Annually', '/year', 1 / 1)
    };
});
