define(function (require, exports, module) {
    'use strict';

    var elQuijoteExtension = function ($provide) {
        $provide.decorator('el_quijote', function() {
            return 'Don Quijote';
        });
    };

    elQuijoteExtension.$inject = ['$provide'];

    module.exports = elQuijoteExtension;
});