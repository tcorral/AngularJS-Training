define(['angular'], function (angular) {

    var definition = ['TasksFactory'];

    var TasksFactory = function (parseHeaders, $q, $http, TasksMediator) {
        var dataUrl = '';

        var getHttpBaseConfig = function(method) {
            //return {};
            return angular.extend({}, parseHeaders, {
                url: dataUrl,
                method: method.toUpperCase()
            });
        };

        var fetchAllFromServer = function () {
            return $http(getHttpBaseConfig('get'))
                        .then(function (data) {
                            TasksMediator.tasks = data.data.results;
                            return TasksMediator.tasks;
                        });
        };

        var tasksFactory = {
            setDataUrl: function (url) {
                dataUrl = url;
            },
            load: function () {
                return fetchAllFromServer()
            },
            update: function (task) {
                var defer = $q.defer();
                var putConfig = {
                    data: task
                };

                angular.extend(putConfig, getHttpBaseConfig('put'), {
                    "Content-Type": "application/json"
                });

                putConfig.url += '/' + task.objectId;

                $http(putConfig)
                    .then(
                        function () {
                            defer.resolve(fetchAllFromServer());
                        },
                        function (error) {
                            defer.reject(error);
                        }
                    );

                return defer.promise;
            },
            save: function (task) {
                var defer = $q.defer();

                var postConfig = {
                    data: task
                };

                angular.extend(postConfig, getHttpBaseConfig('post'), {
                    "Content-Type": "application/json"
                });

                $http(postConfig)
                    .then(
                        function () {
                            defer.resolve(fetchAllFromServer());
                        },
                        function (error) {
                            defer.reject(error);
                        }
                    );

                return defer.promise;
            },
            toggle: function (task) {
                var defer = $q.defer();
                var putConfig = {
                    data: { done: task.done }
                };

                angular.extend(putConfig, getHttpBaseConfig('put'), {
                    "Content-Type": "application/json"
                });

                putConfig.url += '/' + task.objectId;

                $http(putConfig)
                    .then(
                        function () {
                            defer.resolve(fetchAllFromServer());
                        },
                        function (error) {
                            defer.reject(error);
                        }
                    );

                return defer.promise;
            },
            remove: function (task) {
                var defer = $q.defer();

                var deleteConfig = getHttpBaseConfig('delete');
                deleteConfig.url += '/' + task.objectId;

                $http(deleteConfig)
                    .then(
                        function () {
                            defer.resolve(fetchAllFromServer());
                        },
                        function (error) {
                            defer.reject(error);
                        }
                    );

                return defer.promise;
            }
        };

        return tasksFactory;
    };


    TasksFactory.$inject = ['parseHeaders', '$q', '$http', 'TasksMediator'];

    definition.push(TasksFactory);

    return definition;
});