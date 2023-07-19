module.exports = {
    method: 'GET',
    path: '/task/display',
    options: {
        handler: require('../handlers/displayTask'),
        tags: ['api'], // ADD THIS TAG
       //validate: require('../validations/AddEmp')
    }  
};

