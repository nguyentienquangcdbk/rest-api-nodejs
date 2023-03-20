const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    size : {
        type : String,
        
    },
    img :String,
    price : Number,
    nameProduct : String,
    color : {
        type : String,
        
    },
    quantity : {
        type : Number,

    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
    
})
module.exports = mongoose.model('ItemOrder',ItemSchema);