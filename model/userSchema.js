const mongoose= require('mongoose')

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    Zipcode:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    owner:{
        type:String,
        required:true
    },
    established:{
        type:Number,
        required:true
    }
})

const User= mongoose.model('USER',userSchema);

module.exports=User;