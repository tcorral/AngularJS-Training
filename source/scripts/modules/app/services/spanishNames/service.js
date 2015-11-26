define(['angular'], function (angular) {
    'use strict';

    var definition = ['SpanishNames'];

    var SpanishNamesService = function ($q) {
        var spanishNames = [
            'Salva',
            'Fernando',
            'Andres',
            'Jose',
            'Tomas'
        ];
        return {
            get: function() {
                var defer = $q.defer();

                var lengthArrayNames = spanishNames.length;
                var index = Math.floor(Math.random() * lengthArrayNames);
                var randomName = spanishNames[index];

                defer.resolve(randomName);

                return defer.promise;
            }
        }
    };

    SpanishNamesService.$inject = ['$q'];

    definition.push(SpanishNamesService);

    return definition;
});