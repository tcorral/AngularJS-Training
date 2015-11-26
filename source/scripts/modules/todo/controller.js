define(function (require, exports, module) {

    var definition = ['TodoController'];

    var TodoController = function (TasksMediator, TasksFactory) {
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
                .then(function () {
                   vc.tasks = TasksMediator.tasks;
                });
        }

        vc.toggle = function (task) {
            TasksFactory
                .toggle(task)
                .then(function (){
                    vc.tasks = TasksMediator.tasks;
                })
        };

        vc.remove = function (task) {
            TasksFactory
                .remove(task)
                .then(function () {
                    vc.tasks = TasksMediator.tasks;
                });
        };

        vc.save = function (task) {
            TasksFactory
                .save(task)
                .then(function () {
                    vc.tasks = TasksMediator.tasks;
                });
        };

        vc.update = function (task) {
            TasksFactory
                .update(task)
                .then(function () {
                    vc.tasks = TasksMediator.tasks;
                });
        };

        initialize();
    };

    TodoController.$inject = ['TasksMediator', 'TasksFactory'];

    definition.push(TodoController);

    return definition;
});