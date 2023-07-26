const Boom= require('@hapi/boom');
const Task = require('../Schema/task')

try{
    module.exports = async (request) => {
      
        const editTask = await Task.findByIdAndUpdate(request.params._id);
      
        return {
            statuscode: 200,
            message: 'Task edited',
            data : editTask
        }
        
    };
    }catch{
        Boom.badRequest('invalid query')
    }

