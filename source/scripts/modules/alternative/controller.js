define(function (require, exports, module) {

    var definition = ['SecondController'];

    var SecondController = function ($scope, service) {
        $scope.var2 = service.getMessage();
    };

    SecondController.$inject = ['$scope', 'alternative.Service'];

    definition.push(SecondController);

    return definition;
});