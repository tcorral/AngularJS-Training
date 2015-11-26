define(['angular'], function (angular) {
    'use strict';

    var definition = ['clot'];

    var ClotDirective = function (){
        return {
            scope: {},
            restrict: 'E',
            replace: true,
            template: '<div>Clot</div>'
        };
    };

    ClotDirective.$inject = [];

    definition.push(ClotDirective);

    return definition;
});