define(['angular', './controllers/main', './services/seaAnimals/main', './extensions/services/seaAnimals/main', 'module'],
    function (angular, mainControllerDefinition, seaAnimalsModule, seaAnimalsFactoryExtension, module) {
        'use strict';

        var deps = [
            seaAnimalsModule.name
        ];

        module.name = 'app';

        var mod = angular
            .module(module.name, deps)
            .controller.apply(mod, mainControllerDefinition)
            .config(seaAnimalsFactoryExtension);

        module.exports = mod;
    });