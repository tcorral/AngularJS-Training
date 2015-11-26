define(['angular'], function (angular) {

    var definition = ['arrowListener'];

    var ArrowListenerDirective = function () {
        return {
            restrict: 'E',  // AEC
            scope: {
                moveRight: '&',
                moveLeft: '&'
            },
            template: '<input type="text" />',
            link: function (scope, element, attrs) {
                element.bind('keydown', function(e) {
                    if (e.keyCode === 39) {
                        console.log('right');
                        scope.moveRight();
                    }
                    if (e.keyCode === 37) {
                        console.log('left');
                        scope.moveLeft();
                    }
                })
            }
        };
    };

    ArrowListenerDirective.$inject = [];

    definition.push(ArrowListenerDirective);

    return definition;
});