angular.module('alternative', [])
    .controller('SecondController', function ($scope) {
        $scope.var2 = 'second';
    });
angular.bootstrap(document.getElementById('alternative'), ['alternative']);