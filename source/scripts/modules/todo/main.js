define(['angular', './controller', './value', './directive', 'module'], function (angular, controllerDefinition, valueDefinition, directiveDefinition, module) {

    var deps = [];

    module.name = 'app';

    var mod = angular
        .module(module.name, deps);

    mod.controller.apply(mod, controllerDefinition);

    mod.value.apply(mod, valueDefinition);

    mod.directive.apply(mod, directiveDefinition);

    module.exports = mod;
});