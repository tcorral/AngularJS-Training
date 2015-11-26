define(['angular', './controller', './parseHeadersValue', './mediator', './factory', './directive', 'module'], function (angular, controllerDefinition, parseHeadersValueDefinition, mediatorDefinition, factoryDefinition, directiveDefinition, module) {

    var deps = [];

    module.name = 'app';

    var mod = angular
        .module(module.name, deps);

    mod.controller.apply(mod, controllerDefinition);

    mod.value.apply(mod, parseHeadersValueDefinition);

    mod.value.apply(mod, mediatorDefinition);

    mod.factory.apply(mod, factoryDefinition);

    mod.directive.apply(mod, directiveDefinition);

    module.exports = mod;
});