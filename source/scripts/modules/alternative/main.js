define(['angular', './controller', './factory', 'module'], function (angular, controllerDefinition, factoryDefinition, module) {

    var deps = [];

    module.name = 'alternative';

    var mod = angular
                .module(module.name, deps);

    mod.controller.apply(mod, controllerDefinition);

    mod.factory.apply(mod, factoryDefinition);

    module.exports = mod;
});
