//jshint strict: false
module.exports = function(config) {
    config.set({

        basePath: './app',

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-bootstrap/ui-bootstrap.min.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-translate/angular-translate.min.js',
            'app.js',
            'js/**/*.js',
            '../tests/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-spec-reporter',
            'karma-junit-reporter'
        ],

        reporters: ['spec'],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};