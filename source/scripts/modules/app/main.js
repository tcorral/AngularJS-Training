define(['angular', './directives/clot/main', 'module'],
    function (angular, clotDirectiveModule, module) {
        'use strict';

        var deps = [
            clotDirectiveModule.name
        ];

        module.name = 'app';

        var mod = angular
            .module(module.name, deps);

        module.exports = mod;
    });