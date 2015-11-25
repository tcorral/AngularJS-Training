define(function (require, exports, module) {
    var angular = require('angular');
    var controller = require('./controller');
    var alternativeModule = require('../alternative/main');

    var deps = [
        alternativeModule.name
    ];

    module.name = 'app';

    var mod = angular
        .module(module.name, deps)
        .controller('FirstController', controller);

    module.exports = mod;
});