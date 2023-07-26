const Boom= require('@hapi/boom');
const Task = require('../Schema/task')

try{
    module.exports = async (request) => {
      
        const DeletedTask = await Task.findByIdAndDelete(request.params._id)
        //const createUser = await User.find(data)
        return {
            statuscode: 200,
            message: 'Task deleted',
            data : DeletedTask
        }
        
    };
    }catch{
        Boom.badRequest('invalid query')
    }

