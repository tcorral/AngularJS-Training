define(['../../controllers/main', 'module'], function (original, module) {
    'use strict';

    var name = original[0];
    var definition = [name];
    var originalController = original[1];

    var MyExtendedController = function (){
        var vc = this;
        originalController.apply(vc, arguments);
        vc.anotherName = 'Joanne';
    };

    MyExtendedController.prototype = Object.create(originalController.prototype);

    MyExtendedController.$inject = ['Greetings'];

    definition.push(MyExtendedController);

    module.exports = definition;
});