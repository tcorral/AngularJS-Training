define(function (require, exports, module) {

    var controllerDefinition = ['SecondController'];

    var SecondController = function ($scope) {
        $scope.var2 = 'second';
    };

    SecondController.$inject = ['$scope'];

    controllerDefinition.push(SecondController);

    return controllerDefinition;
});