define(function (require, exports, module) {
    'use strict';

    module.name = 'clot';

    var definition = [module.name];

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

    module.exports = definition;
});