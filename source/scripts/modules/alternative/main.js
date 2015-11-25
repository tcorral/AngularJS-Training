define(['angular', './controller', './service', 'module'], function (angular, controllerDefinition, serviceDefinition, module) {

    var deps = [];

    module.name = 'alternative';

    var mod = angular
                .module(module.name, deps);

    mod.controller.apply(mod, controllerDefinition);

    mod.service.apply(mod, serviceDefinition);

    module.exports = mod;
});
