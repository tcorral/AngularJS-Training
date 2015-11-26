define(['angular'], function (angular) {
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

        $provide.decorator('SeaAnimals', decorator);
    };

    SeaAnimalsFactoryExtension.$inject = ['$provide'];

    return SeaAnimalsFactoryExtension;
});