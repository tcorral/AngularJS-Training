define(['../../../services/seaAnimals/factory', 'module'], function (original, module) {
    'use strict';

    var SeaAnimalsFactoryExtension = function ($provide) {
        var decorator = function($delegate, $q) {
            $delegate.get = function() {
                var defer = $q.defer();

                defer.resolve('Sponge Bob SquarePants');

                return defer.promise;
            };
            return $delegate;
        };

        decorator.$inject = ['$delegate', '$q'];

        $provide.decorator(original[0], decorator);
    };

    SeaAnimalsFactoryExtension.$inject = ['$provide'];

    module.exports = SeaAnimalsFactoryExtension;
});