/**
 * Test for home view controller
 * @author hmartos
 */

'use strict';

describe('homeCtrl', function() {

    beforeEach(module('myApp'));

    describe('controller', function(){

        it('should be defined', inject(function($controller) {
            //Checks that controller is defined
            var homeCtrl = $controller('HomeCtrl');
            expect(homeCtrl).toBeDefined();
        }));

    });
});