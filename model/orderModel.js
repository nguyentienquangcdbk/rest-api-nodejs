const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    itemCart : String,
    totalPrice: {
        type: Number
    },
    dateOrdered: {
        type: Date,
        dafault: Date.now
    },
    name : {
        type : Number,
        require : true
    },
    sdt : {
        type : String,
        require : true
    },
    tp : {
        type : String,
        require : true
    },
    huyen : {
        type : String,
        require : true
    },
    xa : {
        type : String,
        require : true
    },
    sonha : {
        type : String,
        require : true
    },
    ghichu : {
        type : String,
    
    }
    
})
module.exports = mongoose.model('Order',orderSchema);