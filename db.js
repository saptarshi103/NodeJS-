const mongoose = require('mongoose');
require('dotenv').config();                 //importing .env file


//const mongoURL = 'mongodb://localhost:27017/hotels';
const mongoURL = process.env.mongoURL;

mongoose.connect(mongoURL,{
    useNewUrlParser: true,                 //may not reqire but can give warnings
    useUnifiedTopology: true            // they are used to set some rules like use newurl parser (mongodb internal)
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