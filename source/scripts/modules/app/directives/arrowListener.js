define(['angular'], function (angular) {
    'use strict';

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
                        scope.moveRight();
                    }
                    if (e.keyCode === 37) {
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