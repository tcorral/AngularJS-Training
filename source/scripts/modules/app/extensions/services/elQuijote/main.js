define(['../../../services/elQuijote/value', 'module'], function (original, module) {
    'use strict';


    var elQuijoteExtension = function ($provide) {
        $provide.decorator(original[0], function() {
            return 'Don Quijote';
        });
    };

    elQuijoteExtension.$inject = ['$provide'];

    definition.push(elQuijoteExtension);

    module.exports = elQuijoteExtension;
});