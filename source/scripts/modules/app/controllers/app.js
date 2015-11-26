define(function (require, exports, module) {

    var definition = ['AppController'];

    var AppController = function ($scope) {
        var history = [];
        $scope.numbersDisplayed = [0,1,2,3,4,5];

        $scope.moveRight = function() {
            $scope.$evalAsync(function($scope) {
                history.unshift($scope.numbersDisplayed.shift());
            });
        };

        $scope.moveLeft = function() {
            $scope.$evalAsync(function($scope) {
                $scope.numbersDisplayed.unshift(history.shift());
            });
        };
    };

    AppController.$inject = ['$scope'];

    definition.push(AppController);

    return definition;
});