module.exports = {
    method: 'POST',
    path: '/task',
    options: {
        handler: require('../handlers/task'),
        tags: ['api'], // ADD THIS TAG
      validate: require('../validations/taskVali')
    }
};

