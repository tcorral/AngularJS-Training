define(function (require, exports, module) {

    var definition = ['TasksFactory'];

    var TasksFactory = function ($q) {
        var tasksStore = [
            {
                title: 'Test task 1',
                done: false,
                id: 1
            },
            {
                title: 'Test task 2',
                done: false,
                id: 2
            },
            {
                title: 'Test task 3',
                done: false,
                id: 3
            },
            {
                title: 'Test task 4',
                done: false,
                id: 4
            }
        ];

        return {
            getAll: function () {
                var defer = $q.defer();

                defer.resolve(tasksStore);

                return defer.promise;
            },
            remove: function (task) {
                var defer = $q.defer();

                tasksStore = tasksStore.filter(function (item) {
                    return item.id !== task.id;
                });

                defer.resolve(tasksStore);

                return defer.promise;
            }
        };
    };


    TasksFactory.$inject = ['$q'];

    definition.push(TasksFactory);

    return definition;
});