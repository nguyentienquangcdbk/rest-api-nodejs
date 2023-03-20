const mongoose = require('mongoose');

const SliderSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    image : {
        type : String,
    },
  
    
})
module.exports = mongoose.model('Slider',SliderSchema);