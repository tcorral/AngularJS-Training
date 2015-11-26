define(['angular', './controllers/main', './services/greetings/main', 'module'],
    function (angular, mainControllerDefinition, greetingsModule, module) {
        'use strict';

        var deps = [
            greetingsModule.name
        ];

        module.name = 'app';

        var mod = angular
            .module(module.name, deps)
            .controller.apply(mod, mainControllerDefinition);

        module.exports = mod;
    });