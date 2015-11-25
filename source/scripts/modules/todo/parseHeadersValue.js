define(function (require, exports, module) {

    var definition = [];

    var key = 'parseHeaders';
    var value = {
        headers: {
            "X-Parse-Application-Id": "",
            "X-Parse-REST-API-Key": ""
        }
    };

    definition.push(key, value);

    return definition;
});