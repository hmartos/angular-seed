/**
 * Internationalization file with tranlations
 * @author hmartos
 */
(function(angular) {
    "use strict";
    angular.module('myApp').config(['$translateProvider', function($translateProvider) {
        $translateProvider.translations('es', {
            language: "Idioma",
            english: "Inglés",
            spanish: "Español",
            enterYourName: "Introduce tu nombre",
            name: "Nombre",
            welcome: "Bienvenido a casa",
            welcomeMsg: "Este es un proyecto semilla simple con los módulos ui-router, angular-bootstrap y angular-translate",

        });

        $translateProvider.translations('en', {
            language: "Language",
            english: "English",
            spanish: "Spanish",
            enterYourName: "Enter your name",
            name: "Name",
            welcome: "Welcome home",
            welcomeMsg: "This is a simple seed project with modules ui-router, angular-bootstrap and angular-translate",

        });

        $translateProvider.preferredLanguage('es');
        // escapes HTML in the translation
        $translateProvider.useSanitizeValueStrategy('escaped');

    }]);
})(angular);