define(function (require, exports, module) {

    var definition = ['app.Factory'];

    var Factory = function () {
        var message = 'first';
        return {
            getMessage: function () {
                return message;
            }
        };
    };

    Factory.$inject = [];

    definition.push(Factory);

    return definition;

});