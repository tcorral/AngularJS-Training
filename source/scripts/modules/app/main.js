define(['angular', './controllers/main', './services/greetings/main', './extensions/services/greetings/main', 'module'],
    function (angular, mainControllerDefinition, greetingsModule, greetingsProviderExtension, module) {
        'use strict';

        var deps = [
            greetingsModule.name
        ];

        module.name = 'app';

        var mod = angular
            .module(module.name, deps)
            .controller.apply(mod, mainControllerDefinition)
            .config(greetingsProviderExtension)
            .config(['GreetingsProvider', function (GreetingsProvider) {
                GreetingsProvider.setMessage('Goede avond!');
            }]);

        module.exports = mod;
    });