define(function (require, exports, module) {
    'use strict';

    module.name = 'SpanishNames';

    var definition = [module.name];

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

    module.exports = definition;
});