define(function (require, exports, module) {
    var SecondController = function ($scope) {
        $scope.var2 = 'second';
    };

    SecondController.$inject = ['$scope'];

    return SecondController;
});