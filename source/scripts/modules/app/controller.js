define(function (require, exports, module) {

    var controllerDefinition = ['FirstController'];

    var FirstController = function ($scope) {
        $scope.var1 = 'first';
    };

    FirstController.$inject = ['$scope'];

    controllerDefinition.push(FirstController);

    return controllerDefinition;
});