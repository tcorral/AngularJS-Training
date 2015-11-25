define(['angular', './controller', 'module'], function (angular, controllerDefinition, module) {

    var deps = [];

    module.name = 'alternative';

    var mod = angular
                .module(module.name, deps);

    mod.controller.apply(mod, controllerDefinition);

    module.exports = mod;
});
