const Boom= require('@hapi/boom');
const Task = require('../Schema/task');

try{
    module.exports = async (request) => {

        const {
            params
        } = request;

        const DisplayTask = await Task.findById({_id:params._id}, {archive: false})
        return {
            statuscode: 200,
            message: 'Requested task',
            data : DisplayTask
        }
        
    };
    }catch{
        Boom.badRequest('invalid query')
    }

