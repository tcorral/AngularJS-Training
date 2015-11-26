define(['angular', './controllers/main', './services/elQuijote/main', 'module'],
    function (angular, mainControllerDefinition, elQuijoteModule, module) {
        'use strict';

        var deps = [
            elQuijoteModule.name
        ];

        module.name = 'app';

        var mod = angular
            .module(module.name, deps)
            .controller.apply(mod, mainControllerDefinition);

        module.exports = mod;
    });