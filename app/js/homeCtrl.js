/**
 * Controller for home view
 * @author hmartos
 */
(function () {
	function homeCtrl() {

		//Capture the this context of the Controller using vm, standing for viewModel
		var vm = this;

		vm.name = "Héctor";

	}
  angular.module('myApp').controller('HomeCtrl', [homeCtrl]);
})();