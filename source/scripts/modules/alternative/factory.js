define(function (require, exports, module) {

    var definition = ['alternative.Factory'];

    var Factory = function () {
        var message = 'second';
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