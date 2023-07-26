
exports.plugin = {
    name: 'users',
    register: (server) => {
         server.route(require('./routes/addTask'));
         server.route(require('./routes/displayTask'));
         server.route(require('./routes/displayById'));
         server.route(require('./routes/deleteTaskById'));
         server.route(require('./routes/editTask'));
         server.route(require('./routes/taskCompleted'));
     }
};