/**
 * Controller for global scope functions
 * @author hmartos
 */
(function () {
    function applicationCtrl($scope, $translate) {

        //Capture the this context of the Controller using vm, standing for viewModel
        var vm = this;

        /**
         * Changes application language
         * @param language
         */
        $scope.changeLanguage = function (language) {
            $translate.use(language);
        }

    }
    angular.module('myApp').controller('ApplicationCtrl', ['$scope', '$translate', applicationCtrl]);
})();