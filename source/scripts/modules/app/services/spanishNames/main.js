define(['angular', './service', 'module'], function (angular, serviceDefinition, module) {
    'use strict';

    var deps = [];

    module.name = 'spanish-names';

    var mod = angular.module(module.name, deps);

    mod.service.apply(mod, serviceDefinition);

    module.exports = mod;
});