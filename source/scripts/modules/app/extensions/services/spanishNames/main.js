define(['../../../services/spanishNames/service', 'module'], function (original, module) {
    'use strict';

    var SpanishNamesServiceExtension = function ($provide) {
        var decorator = function($delegate, $q) {
            $delegate.get = function() {
                var defer = $q.defer();

                defer.resolve('Francisco');

                return defer.promise;
            };
            return $delegate;
        };

        decorator.$inject = ['$delegate', '$q'];

        $provide.decorator(original[0], decorator);
    };

    SpanishNamesServiceExtension.$inject = ['$provide'];

    module.exports = SpanishNamesServiceExtension;
});