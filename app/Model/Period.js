/* jshint es3:true */
/* globals define */

define([], {
    PerDay: {
        suffix: '/day',
        multiplier: 1 / 365
    },
    PerWeek: {
        suffix: '/week',
        multiplier: 1 / 52
    },
    PerBiWeek: {
        suffix: '/2 weeks',
        multiplier: 1 / 26
    },
    PerSemiMonth: {
        suffix: '/½ month',
        multiplier: 1 / 24
    },
    PerMonth: {
        suffix: '/month',
        multiplier: 1 / 12
    },
    PerAnnum: {
        suffix: '/year',
        multiplier: 1 / 1
    }
});
