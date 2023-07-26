const Boom= require('@hapi/boom');
const Task = require('../Schema/task')

try{
    module.exports = async (request) => {
        const {
            params
        } = request;
        const DeletedTask = await Task.findOneAndUpdate({_id:params._id}, {archive: true})

        return {
            statuscode: 200,
            message: 'Task deleted',
            // data : DeletedTask
        }
        
    };
    }catch{
        Boom.badRequest('invalid query')
    }

