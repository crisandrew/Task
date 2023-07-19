module.exports = {
    method: 'PATCH',
    path: '/task/edit/{_id}',
    options: {
        handler: require('../handlers/editTask'),
        tags: ['api'], // ADD THIS TAG
       validate: require('../validations/editTaskVali')
    }  
};

