angular
    .module('app', [])
    .controller('FirstController', function ($scope) {
        $scope.var1 = 'first';
    });
angular.bootstrap(document.getElementById('app'), ['app']);