const Boom= require('@hapi/boom');
const Task = require('../Schema/task');

try{
    module.exports = async (request) => {

        const DisplayTask = await Task.findById(request.params._id)
        return {
            statuscode: 200,
            message: 'Requested task',
            data : DisplayTask
        }
        
    };
    }catch{
        Boom.badRequest('invalid query')
    }

