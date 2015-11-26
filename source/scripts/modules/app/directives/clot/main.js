define(['angular', './directive', 'module'], function (angular, directiveDefinition, module) {
    'use strict';

    module.name = 'clot-module';

    var deps = [];

    var mod = angular.module(module.name, deps);

    mod.directive.apply(mod, directiveDefinition);

    module.exports = mod;
});