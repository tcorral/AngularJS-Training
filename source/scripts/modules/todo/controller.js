define(function (require, exports, module) {

    var definition = ['TodoController'];

    var TodoController = function (TasksFactory) {
        var vc = this;
        vc.tasks = [];
        vc.task = {
            done: false,
            title: ''
        };

        TasksFactory.setDataUrl('https://api.parse.com/1/classes/Tasks');

        function initialize () {
            TasksFactory
                .load()
                .then(function (tasks) {
                    vc.tasks = tasks;
                });
        }

        vc.toggle = function (task) {
            TasksFactory
                .toggle(task)
                .then(function (tasks) {
                    vc.tasks = tasks;
                });
        };

        vc.remove = function (task) {
            TasksFactory
                .remove(task)
                .then(function (tasks) {
                    vc.tasks = tasks;
                });
        };

        vc.save = function (task) {
            TasksFactory
                .save(task)
                .then(function (tasks) {
                    vc.tasks = tasks;
                });
        };

        vc.update = function (task) {
            TasksFactory
                .update(task)
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