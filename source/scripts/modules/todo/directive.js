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

    var TodoListDirective = function () {
        return {
            restrict: 'E',  // AEC
            scope: {
                tasks: '=',
                onRemove: '&'
            },
            template: getTemplate(),
            link: function (scope, element, attrs) {
                scope.remove = function (task) {
                    scope.onRemove({ task: task });
                };
            }
        };
    };

    TodoListDirective.$inject = [];

    definition.push(TodoListDirective);

    return definition;
});