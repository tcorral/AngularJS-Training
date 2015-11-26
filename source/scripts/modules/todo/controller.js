define(function (require, exports, module) {

    var definition = ['TodoController'];

    var TodoController = function ($scope, TasksMediator, TasksFactory) {
        var vc = this;
        vc.tasks = [];

        vc.task = {
            done: false,
            title: ''
        };

        var errorHandler = function (error) {
            $scope.$bus.publish({
                channel: 'notify',
                topic: 'change.message',
                data: error && error.message || 'This is a generic error'
            });
        };


        TasksFactory.setDataUrl('https://api.parse.com/1/classes/Tasks');

        function initialize () {
            TasksFactory
                .load()
                .then(
                    function () {
                        vc.tasks = TasksMediator.tasks;
                    },
                    errorHandler
                );
        }

        vc.toggle = function (task) {
            TasksFactory
                .toggle(task)
                .then(
                    function () {
                        vc.tasks = TasksMediator.tasks;
                    },
                    errorHandler
                );
        };

        vc.remove = function (task) {
            TasksFactory
                .remove(task)
                .then(
                    function () {
                        vc.tasks = TasksMediator.tasks;
                    },
                    errorHandler
                );
        };

        vc.save = function (task) {
            TasksFactory
                .save(task)
                .then(
                    function () {
                        vc.tasks = TasksMediator.tasks;
                    },
                    errorHandler
                );
        };

        vc.update = function (task) {
            TasksFactory
                .update(task)
                .then(
                    function () {
                        vc.tasks = TasksMediator.tasks;
                    },
                    errorHandler
                );
        };

        initialize();
    };

    TodoController.$inject = ['$scope', 'TasksMediator', 'TasksFactory'];

    definition.push(TodoController);

    return definition;
});