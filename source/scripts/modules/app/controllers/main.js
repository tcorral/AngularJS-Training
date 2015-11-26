define(['angular'], function (angular) {
    'use strict';

    var definition = ['MainController'];

    var MainController = function (SeaAnimals){
        var vc = this;
        vc.name = '';

        function initialize() {
            SeaAnimals
                .get()
                .then(function (name) {
                    vc.name = name;
                });
        }

        initialize();
    };

    MainController.$inject = ['SeaAnimals'];

    definition.push(MainController);

    return definition;
});