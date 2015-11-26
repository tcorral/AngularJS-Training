define(['angular', 'postal', './controllers/notifier', './controllers/todo',
        './services/parseHeadersValue', './services/TasksMediator', './services/TasksFactory',
        './directives/todoList', 'module'],
    function (angular, postal, notifyControllerDefinition, todoControllerDefinition,
              parseHeadersValueDefinition, TasksMediatorDefinition, TasksFactoryDefinition,
              todoListDirectiveDefinition, module) {

        var deps = [];

        module.name = 'app';

        var mod = angular
            .module(module.name, deps);

        mod.controller.apply(mod, todoControllerDefinition);

        mod.controller.apply(mod, notifyControllerDefinition);

        mod.value.apply(mod, parseHeadersValueDefinition);

        mod.value.apply(mod, TasksMediatorDefinition);

        mod.factory.apply(mod, TasksFactoryDefinition);

        mod.directive.apply(mod, todoListDirectiveDefinition);

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