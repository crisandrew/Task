const Boom= require('@hapi/boom');
const Task = require('../Schema/task')
try{
module.exports = async (request, h) => {
    const {
      params,
      auth: { credentials }
    } = request;
    let data = {
      completedByName :"abc",
      completedById : "gvf",
      status : "inProgress"
    }

    const options = {new: true}

    const taskStatus = await Task.findOneAndUpdate({_id: params._id}, data, options)
      return {
        statusCode: 200,
        message: 'task status',
        data: taskStatus
      }}
    } catch (e) {
      return Boom.badRequest(e);
    }


  