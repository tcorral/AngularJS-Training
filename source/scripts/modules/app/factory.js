define(function (require, exports, module) {

    var definition = ['RedditFactory'];

    var Factory = function ($http, $q) {
        var dataUrl = '';
        var rowsStore = [];

        return {
            setUrl: function (url) {
                dataUrl = url;
            },
            load: function () {
                var defer = $q.defer();

                if(!dataUrl){
                    defer.reject(new Error('The url has not been set, please use setUrl method first'));
                } else {
                    $http
                        .get(dataUrl)
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
                }


                return defer.promise;
            }
        };
    };

    Factory.$inject = ['$http', '$q'];

    definition.push(Factory);

    return definition;

});