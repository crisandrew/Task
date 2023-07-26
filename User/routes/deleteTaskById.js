module.exports = {
    method: 'DELETE',
    path: '/task/delete/{_id}',
    options: {
        handler: require('../handlers/deleteTaskById'),
        tags: ['api'], // ADD THIS TAG
       validate: require('../validations/deleteTaskById')
    }  
};

