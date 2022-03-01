const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    id_number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cellphone: {
        type: String,
        required: true
    },
    age: {
        type: String,
        default: ""       
    },
    occupation:{
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },     

    address: {
        type: String,
        default: ""
    },

    register_date: {
        type: Date,
        default: Date.now()
    }
    
});

module.exports = mongoose.model('Client',ClientSchema);