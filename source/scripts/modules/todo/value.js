define(function (require, exports, module) {

    var definition = [];

    var key = 'Tasks';

    var value = [
        {
            title: 'Test task 1',
            id: 1
        },
        {
            title: 'Test task 2',
            id: 2
        },
        {
            title: 'Test task 3',
            id: 3
        },
        {
            title: 'Test task 4',
            id: 4
        }
    ];

    definition.push(key, value);

    return definition;
});