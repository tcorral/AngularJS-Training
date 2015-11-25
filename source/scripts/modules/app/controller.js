define(function (require, exports, module) {

    var definition = ['FirstController'];

    var FirstController = function ($scope, service) {
        $scope.var1 = service.getMessage();
    };

    FirstController.$inject = ['$scope', 'app.Service'];

    definition.push(FirstController);

    return definition;
});