define(['angular'], function (angular) {
    'use strict';

    var ClotExtension = function ($provide) {
        var decorator = function($delegate) {
            var directive = $delegate[0];
            var link = directive.link;

            directive.template = '<div>Clot has been extended</div>';
            directive.restrict = 'AE';
            directive.replace = false;

            directive.compile = function() {
                return function(scope, element, attrs, ctrls) {
                    if (typeof link === 'function') {
                        return link.apply(this, arguments);
                    }
                };
            };
            return $delegate;
        };
        decorator.$inject = ['$delegate'];

        $provide.decorator('clotDirective', decorator);
    };

    ClotExtension.$inject = ['$provide'];

    return ClotExtension;
});