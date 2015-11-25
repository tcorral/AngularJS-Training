define(function (require, exports, module) {

    var definition = ['RedditController'];

    var RedditController = function ($scope, RedditFactory) {
        $scope.rows = [];

        RedditFactory
            .load()
            .then(function (rows) {
                $scope.rows = rows;
            });
    };

    RedditController.$inject = ['$scope', 'RedditFactory'];

    definition.push(RedditController);

    return definition;
});