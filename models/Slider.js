const mongoose = require("mongoose");


const SliderSchema = new mongoose.Schema(
    {
        title: {type:String,required: true},
        desc: {type:String,required: true},
        img: {type:String,required: true},
        categories:{type:String,default:"women"},
        color: {type:String,default:"aliceblue"},
              
    },
    {timestamps:true}      
);


module.exports = mongoose.model("Slider", SliderSchema);