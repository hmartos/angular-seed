(function () {
	function homeCtrl() {

		var name = "Héctor";

		//Exports, inyects this variables and function into the view	
		angular.extend(this, {
			name: name
		});

	}
  angular.module('myApp.home', []).controller('HomeCtrl', [homeCtrl]);
})();