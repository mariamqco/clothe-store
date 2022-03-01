const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    
    name:{
        type: String,
        required: true        
    },

    reference:{
        type: String,
        required: true
    },

    brand:{
        type: String,
        required: true
    },

    unit_price:{
        type: Number,
        required: true
    },

    image_url:{
        type: String,
        required: true
    },

    in_stock:{
        type: Number,
        required: true
    },

    description:{
        type: String,
        default:""       
    },

    category: {
        type: String,
        required: true
    },

    register_date:{
        type: Date,
        default: Date.now()
    }  

});

module.exports = mongoose.model('Product', productSchema);