define(function (require, exports, module) {

    var controllerDefinition = ['SecondController'];

    var SecondController = function ($scope, value) {
        $scope.var2 = value;
    };

    SecondController.$inject = ['$scope', 'alternative.Value'];

    controllerDefinition.push(SecondController);

    return controllerDefinition;
});