define(function (require, exports, module) {

    var definition = ['NotifierController'];

    var NotifierController = function ($scope) {
        var vc = this;
        vc.message = '';

        $scope.$bus.subscribe({
            channel: 'notify',
            topic: 'change.message',
            callback: function(message) {
                vc.message = message;
            }
        });

    };

    NotifierController.$inject = ['$scope'];

    definition.push(NotifierController);

    return definition;
});