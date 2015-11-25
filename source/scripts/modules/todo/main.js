define(['angular', './controller', './parseHeadersValue', './factory', './directive', 'module'], function (angular, controllerDefinition, parseHeadersValueDefinition, factoryDefinition, directiveDefinition, module) {

    var deps = [];

    module.name = 'app';

    var mod = angular
        .module(module.name, deps);

    mod.controller.apply(mod, controllerDefinition);

    mod.value.apply(mod, parseHeadersValueDefinition);

    mod.factory.apply(mod, factoryDefinition);

    mod.directive.apply(mod, directiveDefinition);

    module.exports = mod;
});