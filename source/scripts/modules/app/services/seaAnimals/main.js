define(['angular', './factory', 'module'], function (angular, factoryDefinition, module) {
    'use strict';

    var deps = [];

    module.name = 'sea-animals';

    var mod = angular.module(module.name, deps);

    mod.factory.apply(mod, factoryDefinition);

    module.exports = mod;
});