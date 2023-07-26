const Boom = require('@hapi/boom');
const Task = require('../Schema/task')


module.exports = async (request) => {
    try {
        const {
            payload,
            auth: { credentials },
            params
        } = request;
        
        const options = { returnDocument: "after", new : true};

        const editTask = await Task.findOneAndUpdate({ _id: params._id }, payload, options);

    
        return {
            statuscode: 200,
            message: 'Task edited',
            data: editTask
        }
    } catch {
        Boom.badRequest('invalid query')
    }
}

