const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    address:String,
    createdAt:{
        type:Date,
        default:new Date()
    }
})

const studentModel = mongoose.model('Student', studentSchema)
module.exports =studentModel