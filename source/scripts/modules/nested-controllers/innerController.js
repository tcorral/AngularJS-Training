define(function (require, exports, module) {

    var definition = ['InnerController'];

    var InnerController = function ($scope) {
        $scope.var1 = 'Var1 InnerController';
    };

    InnerController.$inject = ['$scope'];

    definition.push(InnerController);

    return definition;
});