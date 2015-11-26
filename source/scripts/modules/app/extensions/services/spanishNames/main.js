define(['angular'], function (angular) {
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

        $provide.decorator('SpanishNames', decorator);
    };

    SpanishNamesServiceExtension.$inject = ['$provide'];

    return SpanishNamesServiceExtension;
});