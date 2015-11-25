define(function (require, exports, module) {

    var definition = ['RedditFactory'];

    var Factory = function ($http, $q) {
        var url = 'https://www.reddit.com/new.json';
        var rowsStore = [];

        return {
            load: function () {
                var defer = $q.defer();

                $http
                    .get(url)
                    .then(
                        function (data) {
                            var dirtyNews = data.data.data.children;
                            var cleanNews = [];

                            dirtyNews.forEach(function(item) {
                                var _new = {};
                                item = item.data;
                                _new.title = item.title;
                                _new.id = item.id;
                                if (item.thumbnail.indexOf('http') !== -1) {
                                    _new.thumbnail = item.thumbnail;
                                }
                                cleanNews.push(_new);
                            });
                            rowsStore = cleanNews;
                            defer.resolve(rowsStore);
                        },
                        function (error) {
                            defer.reject(error);
                        }
                    );

                return defer.promise;
            }
        };
    };

    Factory.$inject = ['$http', '$q'];

    definition.push(Factory);

    return definition;

});