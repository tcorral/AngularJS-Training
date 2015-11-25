define(function (require, exports, module) {

    var definition = ['OuterController'];

    var OuterController = function ($scope) {
        $scope.var1 = 'Var1 OuterController';
    };

    OuterController.$inject = ['$scope'];

    definition.push(OuterController);

    return definition;
});