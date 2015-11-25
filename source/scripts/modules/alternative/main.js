define(['angular', './controller'], function (angular, controller) {
    var module = angular.module('alternative', []);

    module.controller('SecondController', controller);

    return module;
});
