define(['angular'], function (angular) {
    'use strict';

    var definition = ['MainController'];

    var MainController = function (Greetings){
        var vc = this;
        vc.message = '';

        function initialize() {
            Greetings
                .get()
                .then(function (message) {
                    vc.message = message;
                });
        }

        initialize();
    };

    MainController.$inject = ['Greetings'];

    definition.push(MainController);

    return definition;
});