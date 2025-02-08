const mongoose = require('mongoose');

const personschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number,
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager']
    },
    mobile:{
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number
    }

})


const Person = mongoose.model('person',personschema);
module.exports = Person;