define(function (require, exports, module) {

    var definition = ['OuterController'];

    var OuterController = function () {
        var vc = this;
        vc.var1 = 'Var1 OuterController';
    };

    OuterController.$inject = [];

    definition.push(OuterController);

    return definition;
});