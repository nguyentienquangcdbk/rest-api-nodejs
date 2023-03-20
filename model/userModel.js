const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    phone : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    cart : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'ItemOrder'
    }],
    role : {
        type : Number,
        default : 0,
        
    },
    
})

// module.exports = mongoose.Model('User',userSchema);
module.exports = mongoose.model('User',userSchema);