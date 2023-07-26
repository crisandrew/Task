const { validate } = require('../Schema/task');

module.exports = {
    method: 'PATCH',
    path: '/task/completedBy/{_id}',
    options: {
        handler: require('../handlers/taskCompleted'),
        tags: ['api'], 
        // auth: 'jwt',
        plugins: {
          hapiAuthorization: { roles: ['support', 'superAdmin'] }
        },
        validate: require('../validations/taskCompleted')
    }
    
};

