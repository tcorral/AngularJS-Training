define(['angular', './controllers/main', './services/spanishNames/main', 'module'],
    function (angular, mainControllerDefinition, spanishNamesModule, module) {
        'use strict';

        var deps = [
            spanishNamesModule.name
        ];

        module.name = 'app';

        var mod = angular
            .module(module.name, deps)
            .controller.apply(mod, mainControllerDefinition);

        module.exports = mod;
    });