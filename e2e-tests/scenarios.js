'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


    it('should automatically redirect to /home when location is /app', function() {
        browser.get('app');
        expect(browser.getLocationAbsUrl()).toMatch("/home");
    });


    describe('home', function() {

        beforeEach(function() {
            browser.get('app/#/home');
        });


        it('should render home when user navigates to home', function() {
            expect(element.all(by.id('welcome')).first().getText()).toMatch(/Bienvenido/);
        });

    });

});