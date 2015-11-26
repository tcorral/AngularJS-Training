define(function (require, exports, module) {
    'use strict';

    module.name = 'Greetings';

    var definition = [module.name];

    var GreetingsProvider = function () {
        var message = 'Hello';

        this.setMessage = function (greeting_message){
            message = greeting_message;
        };

        var $get = function ($q) {
            return {
                get: function () {
                    var defer = $q.defer();

                    defer.resolve(message);

                    return defer.promise;
                }
            };
        };
        $get.$inject = ['$q'];

        this.$get = $get;
    };

    GreetingsProvider.$inject = [];

    definition.push(GreetingsProvider);

    module.exports = definition;
});