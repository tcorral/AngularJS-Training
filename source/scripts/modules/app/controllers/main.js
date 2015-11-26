define(['angular'], function (angular) {
    'use strict';

    var definition = ['MainController'];

    var MainController = function (SpanishNames){
        var vc = this;
        vc.name = '';

        function initialize() {
            SpanishNames
                .get()
                .then(function (name) {
                    vc.name = name;
                });
        }

        initialize();
    };

    MainController.$inject = ['SpanishNames'];

    definition.push(MainController);

    return definition;
});