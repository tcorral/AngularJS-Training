define(['angular', './controller', './factory', './directive', 'module'], function (angular, controllerDefinition, factoryDefinition, directiveDefinition, module) {

    var deps = [];

    module.name = 'app';

    var mod = angular
        .module(module.name, deps);

    mod.controller.apply(mod, controllerDefinition);

    mod.factory.apply(mod, factoryDefinition);

    mod.directive.apply(mod, directiveDefinition);

    module.exports = mod;
});