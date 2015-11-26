define(['angular'], function (angular) {
    'use strict';

    var elQuijoteExtension = function ($provide) {
        $provide.decorator('el_quijote', function() {
            return 'Don Quijote';
        });
    };

    elQuijoteExtension.$inject = ['$provide'];

    return elQuijoteExtension;
});