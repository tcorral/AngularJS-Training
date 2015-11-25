define(['angular', './controller', './factory', '../alternative/main', 'module'], function (angular, controllerDefinition, factoryDefinition, alternativeModule, module) {

    var deps = [
        alternativeModule.name
    ];

    module.name = 'app';

    var mod = angular
        .module(module.name, deps);

    mod.controller.apply(mod, controllerDefinition);

    mod.factory.apply(mod, factoryDefinition);

    module.exports = mod;
});