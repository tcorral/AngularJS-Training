define(function (require, exports, module) {

    var definition = ['RedditController'];

    var RedditController = function (RedditFactory) {
        var vc = this;
        vc.rows = [];

        RedditFactory.setUrl('https://www.reddit.com/new.json');
        RedditFactory
            .load()
            .then(function (rows) {
                vc.rows = rows;
            });
    };

    RedditController.$inject = ['RedditFactory'];

    definition.push(RedditController);

    return definition;
});