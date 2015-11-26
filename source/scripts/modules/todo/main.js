define(['angular', 'postal', './notifyController', './controller', './parseHeadersValue', './mediator', './factory', './directive', 'module'],
    function (angular, postal, notifyController, controllerDefinition, parseHeadersValueDefinition, mediatorDefinition,
              factoryDefinition, directiveDefinition, module) {

        var deps = [];

        module.name = 'app';

        var mod = angular
            .module(module.name, deps);

        mod.controller.apply(mod, controllerDefinition);

        mod.controller.apply(mod, notifyController);

        mod.value.apply(mod, parseHeadersValueDefinition);

        mod.value.apply(mod, mediatorDefinition);

        mod.factory.apply(mod, factoryDefinition);

        mod.directive.apply(mod, directiveDefinition);

        mod.config(['$provide', function ($provide) {
            $provide.decorator('$rootScope', [
                '$delegate',
                function ($delegate) {
                    Object.defineProperty($delegate.constructor.prototype,
                        '$bus', {
                            value: postal,
                            enumerable: false
                        });

                    return $delegate;
                }
            ]);
        }]);
        module.exports = mod;
    });