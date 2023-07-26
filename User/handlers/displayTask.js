const Boom= require('@hapi/boom');
const Task = require('../Schema/task')

try{
    module.exports = async () => {
        //let res = request.params ;
      
        const DisplayTask = await Task.find();
        //const createUser = await User.find(data)
        return {
            statuscode: 200,
            message: 'list of tasks',
            data : DisplayTask
        }
        
    };
    }catch{
        Boom.badRequest('invalid query')
    }

