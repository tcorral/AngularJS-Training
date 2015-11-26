define(['angular', './controllers/app', './directives/arrowListener', 'module'],
    function (angular, firstControllerDefinition, arrowListenerDirectiveDefinition, module) {

        var deps = [];

        module.name = 'app';

        var mod = angular
            .module(module.name, deps);

        mod.controller.apply(mod, firstControllerDefinition);

        mod.directive.apply(mod, arrowListenerDirectiveDefinition);

        module.exports = mod;
    });