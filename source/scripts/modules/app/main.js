define(['angular', './controller'], function (angular, controller) {
    var module = angular.module('app', []);

    module.controller('FirstController', controller);

    return module;
});
