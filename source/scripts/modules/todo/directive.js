define(['angular'], function (angular) {

    var definition = ['todoList'];

    var getTemplate = function () {
        var template = '';
        template += '<div>';
        template += '   <div>';
        template += '       <input type="text" ng-model="model.title"/>';
        template += '       <button ng-click="save(model)">Save</button>';
        template += '   </div>';
        template += '   <ul>';
        template += '       <li ng-repeat="task in tasks track by task.objectId">';
        template += '           <div ng-hide="task.editing">';
        template += '               <span data-id="{{task.objectId}}" ';
        template += '                   ng-bind="task.title" ng-class="{ strike: task.done }">';
        template += '               </span>';
        template += '               <button ng-click="edit(task)">Edit</button>';
        template += '           </div>';
        template += '           <div ng-show="task.editing">';
        template += '               <input type="text" ng-model="task.title" />';
        template += '               <button ng-click="update(task)">Update</button>';
        template += '           </div>';
        template += '           <div>';
        template += '               <label>Mark/Unmark</label>';
        template += '               <input type="checkbox" ng-model="task.done" ng-change="toggle(task)"/>';
        template += '           </div>';
        template += '           <div>';
        template += '               <button ng-click="remove(task)">Remove</button>';
        template += '           </div>';
        template += '       </li>';
        template += '   </ul>';
        template += '</div>';
        return template;
    };

    var TodoListDirective = function () {
        return {
            restrict: 'E',  // AEC
            scope: {
                model: '=',
                tasks: '=',
                onToggle: '&',
                onRemove: '&',
                onUpdate: '&',
                onSave: '&'
            },
            template: getTemplate(),
            link: function (scope, element, attrs) {
                scope.remove = function (task) {
                    scope.onRemove({ task: task });
                };
                scope.toggle = function (task) {
                    scope.onToggle({ task: task });
                };
                scope.edit = function (task) {
                    task.editing = true;
                };
                scope.save = function (task) {
                    scope.onSave({ task: task });
                };
                scope.update = function (task) {
                    delete task.editing;
                    scope.onUpdate({ task: task });
                }
            }
        };
    };

    TodoListDirective.$inject = [];

    definition.push(TodoListDirective);

    return definition;
});