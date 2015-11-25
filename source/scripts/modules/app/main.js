define(['angular', './controller', './service', '../alternative/main', 'module'], function (angular, controllerDefinition, serviceDefinition, alternativeModule, module) {

    var deps = [
        alternativeModule.name
    ];

    module.name = 'app';

    var mod = angular
        .module(module.name, deps);

    mod.controller.apply(mod, controllerDefinition);

    mod.service.apply(mod, serviceDefinition);

    module.exports = mod;
});