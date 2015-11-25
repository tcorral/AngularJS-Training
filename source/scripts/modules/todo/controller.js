define(function (require, exports, module) {

    var definition = ['TodoController'];

    var TodoController = function (Tasks) {
        var vc = this;
        vc.tasks = Tasks;

        vc.remove = function (task) {
            vc.tasks = vc.tasks.filter(function (item) {
                return item.id !== task.id;
            });
        };
    };

    TodoController.$inject = ['Tasks'];

    definition.push(TodoController);

    return definition;
});