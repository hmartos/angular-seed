'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

    //TODO
    //http://stackoverflow.com/questions/19818440/protractor-inject-is-not-defined-when-testing-angular-services
    //http://stackoverflow.com/questions/22837242/how-to-inject-datefilter-in-protractor

    it('should automatically redirect to /home when location is /app', function() {
        browser.get('app');
        expect(browser.getLocationAbsUrl()).toMatch("/home");
    });

    describe('home', function() {

        beforeEach(function() {
            browser.get('app/#/home');
        });

        it('should render home when user navigates to home', function() {
            expect(element.all(by.id('forked')).first().getText()).toBe("Forked from angular/angular-seed");
        });

        it('should change language between english and spanish', function() {
            //Get dropdown
            var languageSwitcher = element(by.css("div[uib-dropdown]"));

            //Change language to spanish
            languageSwitcher.element(by.id('languageSwitcher')).click();
            languageSwitcher.element(by.id('toSpanish')).click();
            expect(element.all(by.id('welcome')).first().getText()).toMatch(/Bienvenido/);

            //Change language to english
            languageSwitcher.element(by.id('languageSwitcher')).click();
            languageSwitcher.element(by.id('toEnglish')).click();
            expect(element.all(by.id('welcome')).first().getText()).toMatch(/Welcome/);
        });

        it('should greet user by provided name', function() {
            element(by.model('homeCtrl.name')).clear();
            element(by.model('homeCtrl.name')).sendKeys('Héctor');

            var greeting = element(by.binding('homeCtrl.name'));

            expect(greeting.getText()).toEqual('Bienvenido a casa, Héctor!');
            //expect(element.all(by.id('welcome')).first().getText()).toMatch(/Bienvenido/)

        });

    });

});