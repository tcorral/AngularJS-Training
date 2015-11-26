define(function (require, exports, module) {

    var definition = ['AppController'];

    var AppController = function ($scope) {
        var history = [];
        $scope.numbersDisplayed = [0,1,2,3,4,5];

        $scope.moveRight = function() {
            history.unshift($scope.numbersDisplayed.shift());
            console.log('history:', history);
            console.log('numbersDisplayed:', $scope.numbersDisplayed);
        };

        $scope.moveLeft = function() {
            $scope.numbersDisplayed.unshift(history.shift());
            console.log('history:', history);
            console.log('numbersDisplayed:', $scope.numbersDisplayed);
        };
    };

    AppController.$inject = ['$scope'];

    definition.push(AppController);

    return definition;
});