define(['../../../services/greetings/provider', 'module'], function (original, module) {
    'use strict';

    var GreetingsProviderExtension = function ($provide) {
        var decorator = function($delegate, $q) {
            $delegate.get = function() {
                var defer = $q.defer();

                defer.resolve('Goede Middag!');

                return defer.promise;
            };
            return $delegate;
        };

        decorator.$inject = ['$delegate', '$q'];

        $provide.decorator(original[0], decorator);
    };

    GreetingsProviderExtension.$inject = ['$provide'];

    module.exports = GreetingsProviderExtension;
});