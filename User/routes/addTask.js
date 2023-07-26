module.exports = {
    method: 'POST',
    path: '/task',
    options: {
        handler: require('../handlers/addTask'),
        tags: ['api'], // ADD THIS TAG
      validate: require('../validations/addTaskVali')
    }
};

