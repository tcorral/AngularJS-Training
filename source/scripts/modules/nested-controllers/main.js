define(['angular', './innerController','./outerController', 'module'], function (angular, innerControllerDefinition, outerControllerDefinition, module) {

    var deps = [];

    module.name = 'app';

    var mod = angular
        .module(module.name, deps);

    mod.controller.apply(mod, innerControllerDefinition);

    mod.controller.apply(mod, outerControllerDefinition);

    module.exports = mod;
});