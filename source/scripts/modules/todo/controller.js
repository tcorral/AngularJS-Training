define(function (require, exports, module) {

    var definition = ['TodoController'];

    var TodoController = function (TasksFactory) {
        var vc = this;
        vc.tasks = [];

        function initialize () {
            TasksFactory
                .getAll()
                .then(function (tasks) {
                    vc.tasks = tasks;
                });
        }

        vc.remove = function (task) {
            TasksFactory
                .remove(task)
                .then(function (tasks) {
                    vc.tasks = tasks;
                });
        };

        initialize();
    };

    TodoController.$inject = ['TasksFactory'];

    definition.push(TodoController);

    return definition;
});