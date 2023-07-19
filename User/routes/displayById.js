module.exports = {
    method: 'GET',
    path: '/task/display/{_id}',
    options: {
        handler: require('../handlers/displayById'),
        tags: ['api'], // ADD THIS TAG
       validate: require('../validations/displayById')
    }  
};

