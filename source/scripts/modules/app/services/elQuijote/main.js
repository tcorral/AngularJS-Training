define(['angular', './value', 'module'], function (angular, valueDefinition, module) {
    'use strict';

    var deps = [];

    module.name = 'quijote';

    var mod = angular.module(module.name, deps);

    mod.value.apply(mod, valueDefinition);

    module.exports = mod;
});