define(['angular'], function (angular) {

    var definition = ['todoList'];

    var getTemplate = function () {
        var template = '';
        template += '<ul>';
        template += '   <li ng-repeat="task in tasks track by task.id">';
        template += '       <span data-id="{{task.id}}" ng-bind="task.title" ng-class="{ strike: task.done }"></span>';
        template += '       <div>';
        template += '           <label>Mark/Unmark</label>';
        template += '           <input type="checkbox" ng-model="task.done"/>';
        template += '       </div>';
        template += '       <div>';
        template += '           <label>Remove</label>';
        template += '           <button ng-click="remove(task)"/>';
        template += '       </div>';
        template += '   </li>';
        template += '</ul>';
        return template;
    };

    var TodoListDirective = function (Tasks) {
        return {
            restrict: 'E',  // AEC
            scope: {},
            template: getTemplate(),
            link: function (scope, element, attrs) {
                scope.tasks = Tasks;
                scope.remove = function (task) {
                    scope.tasks = scope.tasks.filter(function (item) {
                        return item.id !== task.id;
                    });
                };
            }
        };
    };

    TodoListDirective.$inject = ['Tasks'];

    definition.push(TodoListDirective);

    return definition;
});