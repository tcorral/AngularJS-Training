define(['angular'], function (angular) {

    var definition = ['TasksFactory'];

    var TasksFactory = function (parseHeaders, $q, $http) {
        var dataUrl = '';

        var getHttpBaseConfig = function(method) {
            return angular.extend({}, parseHeaders, {
                url: dataUrl,
                method: method.toUpperCase()
            });
        };

        var fetchAllFromServer = function () {
            return $http(getHttpBaseConfig('get'))
                        .then(function (data) {
                           return data.data.results;
                        });
        };

        var tasksFactory = {
            setDataUrl: function (url) {
                dataUrl = url;
            },
            load: function () {
                var defer = $q.defer();

                fetchAllFromServer()
                    .then(
                        function (tasks) {
                            defer.resolve(tasks);
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
                            fetchAllFromServer()
                                .then(
                                    function (tasks) {
                                        defer.resolve(tasks);
                                    },
                                    function (error) {
                                        defer.reject(error);
                                    }
                                );
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
                            fetchAllFromServer()
                                .then(
                                    function (tasks) {
                                        defer.resolve(tasks);
                                    },
                                    function (error) {
                                        defer.reject(error);
                                    }
                                )
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


    TasksFactory.$inject = ['parseHeaders', '$q', '$http'];

    definition.push(TasksFactory);

    return definition;
});