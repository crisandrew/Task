const Mongoose = require('mongoose'); 
Mongoose.connect('mongodb+srv://admin:admin@cluster0.uahqfv5.mongodb.net/?retryWrites=true&w=majority');  
const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));  
db.once('open', function callback() {  
    console.log("Connection with database succeeded.");
});

exports.Mongoose = Mongoose;  
exports.db = db;  