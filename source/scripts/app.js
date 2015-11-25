require.config({
    baseUrl: 'scripts',
    paths: {
        angular: 'https://code.angularjs.org/1.2.28/angular'
    },
    shim: {
        'angular': {
            exports: 'angular'
        }
    }
});

require(['angular', './modules/app/main'], function (angular, app) {
    angular.bootstrap(document.getElementById('app'), ['app']);
});