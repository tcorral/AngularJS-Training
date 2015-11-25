define(function (require, exports, module) {

    var definition = ['alternative.Service'];

    var Service = function () {
        var message = 'second';
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