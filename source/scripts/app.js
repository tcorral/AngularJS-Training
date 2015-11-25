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

require(['angular', 'modules/todo/main'], function (angular) {
    angular.bootstrap(document.getElementById('app'), ['app']);
});