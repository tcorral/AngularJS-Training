define(function (require, exports, module) {
    var FirstController = function ($scope) {
        $scope.var1 = 'first';
    };

    FirstController.$inject = ['$scope'];

    return FirstController;
});