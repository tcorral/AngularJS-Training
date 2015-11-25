define(['angular', './controller', './value', 'module'], function (angular, controllerDefinition, valueDefinition, module) {

    var deps = [];

    module.name = 'alternative';

    var mod = angular
                .module(module.name, deps);

    mod.controller.apply(mod, controllerDefinition);

    mod.value.apply(mod, valueDefinition);

    module.exports = mod;
});
