define(['angular'], function (angular) {
    'use strict';

    var ClotExtension = function ($provide) {
        var decorator = function($delegate) {
            this.$injector = ['$delegate'];
            $delegate.getPepe = function() {
                return 'Other Pepe';
            };
            return $delegate;
        }
        decorator.$inject = ['$delegate'];

        $provide.decorator('clotDirective', decorator);
    };

    ClotExtension.$inject = ['$provide'];

    return ClotExtension;
});