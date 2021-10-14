const { ObjectId } = require('bson')
const mongoosedb = require('mongoose')

const StudentSchema = mongoosedb.Schema({
    Name:{
        type: String,
        required: true
    },
    RollNumber:{
        type: Number,
        required: true
    },
    MobileNumber:{
        type:Number,
        required:true
    },
    ID:{
        type:ObjectId,
        required:true
    }
})

module.exports = mongoosedb.model('Student',StudentSchema)
