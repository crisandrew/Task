const Boom = require('@hapi/boom');
const Task = require('../Schema/task')

try {
    module.exports = async (request) => {
        let { details, status, subTasks, mainTaskId, isMainTaskOrSubTask } = request.payload;
        let data = {
            details,
            status,
            subTasks,
            mainTaskId,
            isMainTaskOrSubTask,
        }
        // const {
        //     auth: { credentials }
        // } = request;

        // const { institutionId, createdBy, createdByName } = credentials;


        const createTask = await Task.create(data)
        return {
            statuscode: 200,
            message: 'employee added',
            data: createTask
        }

    };
} catch {
    Boom.badRequest('invalid query')
}


