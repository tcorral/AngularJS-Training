define(['angular', './controllers/main', './services/spanishNames/main', './extensions/services/spanishNames/main', 'module'],
    function (angular, mainControllerDefinition, spanishNamesModule, spanishNamesServiceExtension, module) {
        'use strict';

        var deps = [
            spanishNamesModule.name
        ];

        module.name = 'app';

        var mod = angular
            .module(module.name, deps)
            .controller.apply(mod, mainControllerDefinition)
            .config(spanishNamesServiceExtension);

        module.exports = mod;
    });