define(['angular', './controllers/main', './services/seaAnimals/main', 'module'],
    function (angular, mainControllerDefinition, seaAnimalsModule, module) {
        'use strict';

        var deps = [
            seaAnimalsModule.name
        ];

        module.name = 'app';

        var mod = angular
            .module(module.name, deps)
            .controller.apply(mod, mainControllerDefinition);

        module.exports = mod;
    });