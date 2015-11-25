define(['angular'], function (angular) {

    var definition = ['todoList'];

    var getTemplate = function () {
        var template = '';
        template += '<ul>';
        template += '   <li ng-repeat="task in tasks track by task.id">';
        template += '       <span data-id="{{task.id}}" ng-bind="task.title"></span>';
        template += '       <div>';
        template += '           <label>Mark/Unmark</label>';
        template += '           <input type="checkbox" ng-click="done(task)"/>';
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
                scope.done = function (task) {
                    task.done = !task.done;
                    var methods = ['removeClass', 'addClass'];
                    var method = methods[Number(task.done)];

                    angular.element(document.querySelector('[data-id="'+ task.id +'"]'))[method]('strike');
                };
            }
        };
    };

    TodoListDirective.$inject = ['Tasks'];

    definition.push(TodoListDirective);

    return definition;
});