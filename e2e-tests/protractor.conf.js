//jshint strict: false
var SpecReporter = require('../node_modules/jasmine-spec-reporter/src/jasmine-spec-reporter.js');

exports.config = {

    allScriptsTimeout: 11000,

    specs: [
        '*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter());
    },

    baseUrl: 'http://localhost:8000/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        displayStacktrace: 'all'
    }

};