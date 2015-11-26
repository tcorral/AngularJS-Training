define(['../../directives/clot/main', 'module'], function (original, module) {
    'use strict';

    var ClotExtension = function ($provide) {
        var decorator = function($delegate) {
            $delegate.getPepe = function() {
                return 'Other Pepe';
            };
            return $delegate;
        }
        decorator.$inject = ['$delegate'];

        $provide.decorator(original.name + 'Directive', decorator);
    };

    ClotExtension.$inject = ['$provide'];

    module.exports = ClotExtension;
});