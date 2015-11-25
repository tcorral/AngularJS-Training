define(function (require, exports, module) {

    var controllerDefinition = ['FirstController'];

    var FirstController = function ($scope, value) {
        $scope.var1 = value;
    };

    FirstController.$inject = ['$scope', 'app.Value'];

    controllerDefinition.push(FirstController);

    return controllerDefinition;
});