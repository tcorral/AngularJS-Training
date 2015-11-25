define(['angular', './controller', './value', '../alternative/main', 'module'], function (angular, controllerDefinition, valueDefinition, alternativeModule, module) {

    var deps = [
        alternativeModule.name
    ];

    module.name = 'app';

    var mod = angular
        .module(module.name, deps);

    mod.controller.apply(mod, controllerDefinition);

    mod.value.apply(mod, valueDefinition);

    module.exports = mod;
});