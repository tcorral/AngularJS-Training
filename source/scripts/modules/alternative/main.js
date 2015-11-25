define(function (require, exports, module) {
    var angular = require('angular');
    var controller = require('./controller');

    var deps = [];

    module.name = 'alternative';

    var mod = angular
                .module(module.name, deps)
                .controller('SecondController', controller);

    module.exports = mod;
});
