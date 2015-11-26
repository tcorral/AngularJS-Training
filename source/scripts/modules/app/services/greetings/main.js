define(['angular', './provider', 'module'], function (angular, providerDefinition, module) {
    'use strict';

    var deps = [];

    module.name = 'greetings';

    var mod = angular.module(module.name, deps);

    mod.provider.apply(mod, providerDefinition);

    module.exports = mod;
});