require.config({
    baseUrl: 'scripts',
    paths: {
        angular: 'https://code.angularjs.org/1.2.28/angular',
        underscore: 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
        postal: 'http://cdnjs.cloudflare.com/ajax/libs/postal.js/0.8.2/postal'
    },
    shim: {
        'angular': {
            exports: 'angular'
        }
    }
});

require(['angular', 'modules/app/main'], function (angular) {
    angular.bootstrap(document.body, ['app']);
});