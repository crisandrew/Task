const Boom= require('@hapi/boom');
const Task = require('../Schema/task')
try{
module.exports = async (request, h) => {
    const {
      params,
      payload, 
      auth: { credentials }
    } = request;

    const { name: completedByName, levelId: completedById} = credentials;

    const taskStatus = await Task.findOneAndUpdate({_id: params._id},
        { completedByName, completedById }
      )
      return {
        statusCode: 200,
        message: 'task status',
        data: taskStatus
      }}
    } catch (e) {
      return Boom.badRequest(e);
    }


  