define(function (require, exports, module) {

    var definition = ['app.Service'];

    var Service = function () {
        var message = 'first';
        return {
            getMessage: function () {
                return message;
            }
        };
    };

    Service.$inject = [];

    definition.push(Service);

    return definition;

});