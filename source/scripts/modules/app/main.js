define(['angular', './controllers/main', './services/elQuijote/main', './extensions/services/elQuijote/main', 'module'],
    function (angular, mainControllerDefinition, elQuijoteModule, elQuijoteValueExtension, module) {
        'use strict';

        var deps = [
            elQuijoteModule.name
        ];

        module.name = 'app';

        var mod = angular
            .module(module.name, deps)
            .controller.apply(mod, mainControllerDefinition)
            .config(elQuijoteValueExtension);

        module.exports = mod;
    });