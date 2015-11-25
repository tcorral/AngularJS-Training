define(['angular', './controller', '../alternative/main', 'module'], function (angular, controllerDefinition, alternativeModule, module) {

    var deps = [
        alternativeModule.name
    ];

    module.name = 'app';

    var mod = angular
        .module(module.name, deps);

    mod.controller.apply(mod, controllerDefinition);

    module.exports = mod;
});