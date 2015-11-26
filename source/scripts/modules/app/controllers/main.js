define(function (require, exports, module) {
    'use strict';

    module.name = 'MainController';

    var definition = [module.name];

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

    module.exports = definition;
});