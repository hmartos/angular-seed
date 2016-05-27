/**
 * Test for application controller
 * @author hmartos
 */

'use strict';

describe('applicationCtrl', function() {

    beforeEach(module('myApp'));

    describe('controller', function(){
        var scope;
        var applicationCtrl;

        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            applicationCtrl = $controller('ApplicationCtrl', {$scope: scope});
        }));

        it('should be defined', inject(function() {
            //Checks that controller is defined
            expect(applicationCtrl).toBeDefined();
        }));

        it('should switch language to english and spanish', inject(function($translate) {
            //Checks changeLanguage function
            scope.changeLanguage('es');
            expect($translate.use()).toBe("es");

            scope.changeLanguage("en");
            expect($translate.use()).toBe("en");
        }));

    });
});