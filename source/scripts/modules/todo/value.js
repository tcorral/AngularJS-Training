define(function (require, exports, module) {

    var definition = [];

    var key = 'Tasks';

    var value = [
        {
            title: 'Test task 1',
            done: false,
            id: 1
        },
        {
            title: 'Test task 2',
            done: false,
            id: 2
        },
        {
            title: 'Test task 3',
            done: false,
            id: 3
        },
        {
            title: 'Test task 4',
            done: false,
            id: 4
        }
    ];

    definition.push(key, value);

    return definition;
});