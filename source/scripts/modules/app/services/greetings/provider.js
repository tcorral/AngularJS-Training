define(['angular'], function (angular) {
    'use strict';

    var definition = ['Greetings'];

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

    return definition;
});