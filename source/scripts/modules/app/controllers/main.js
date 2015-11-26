define(['angular'], function (angular) {
    'use strict';

    var definition = ['MainController'];

    var MainController = function (quijote){
        var vc = this;
        vc.quijote = quijote;
    };

    MainController.$inject = ['el_quijote'];

    definition.push(MainController);

    return definition;
});