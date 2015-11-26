define(['angular', './directives/clot/main', './extensions/directives/clot/main', 'module'],
    function (angular, clotDirectiveModule, clotDirectiveExtension, module) {
        'use strict';

        var deps = [
            clotDirectiveModule.name
        ];

        module.name = 'app';

        var mod = angular
            .module(module.name, deps)
            .config(clotDirectiveExtension);

        module.exports = mod;
    });