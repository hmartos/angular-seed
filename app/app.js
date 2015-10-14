'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ui.router',
	'ui.bootstrap',
	'pascalprecht.translate',
	'myApp.version',
	'myApp.home'
])

angular.module('myApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	//Configuration of ui-router
	$urlRouterProvider.when('', '/home');
	$stateProvider
		.state('home', {
		    url:'/home',
		    views: {
		    	'content': {
		    		templateUrl: 'partials/home.html',
		    		controller: 'HomeCtrl',
			    	controllerAs: 'homeCtrl'
		    	}
		    },
		    access: {
		    	authorizedProfiles: ['*'],
		    	isPublic: true
		    }
		})
}]);
