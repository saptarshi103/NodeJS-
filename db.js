const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db =mongoose.connection;

db.on('connected',()=>{
    console.log("connected to db");
});
db.on('disconneted',()=>{
    console.log("Disconnected from db");
});
db.on('error',(error)=>{
    console.log("error: "+error);
});

module.exports= db;