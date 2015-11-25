define(function (require, exports, module) {

    var definition = ['InnerController'];

    var InnerController = function () {
        var vc = this;
        vc.var1 = 'Var1 InnerController';
    };

    InnerController.$inject = [];

    definition.push(InnerController);

    return definition;
});