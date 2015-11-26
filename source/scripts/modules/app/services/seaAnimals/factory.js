define(function (require, exports, module) {
    'use strict';

    module.name = 'SeaAnimals';

    var definition = [module.name];

    var SeaAnimalsFactory = function ($q) {
        var seaAnimals = [
            'Whale',
            'Crab',
            'Shark',
            'Jellyfish'
        ];

        function MyFactory() {}

        MyFactory.prototype.get = function() {
            var defer = $q.defer();

            var lengthArrayNames = seaAnimals.length;
            var index = Math.floor(Math.random() * lengthArrayNames);
            var randomName = seaAnimals[index];

            defer.resolve(randomName);

            return defer.promise;
        };

        return new MyFactory();
    };

    SeaAnimalsFactory.$inject = ['$q'];

    definition.push(SeaAnimalsFactory);

    module.exports = definition;
});