const mongoosedb = require('mongoose')

const ClassSchema = mongoosedb.Schema({
    Standard: {
        type : String,
        required : true
    },
    Division:{
        type: String,
        required: true
    }
})

module.exports = mongoosedb.model('Class',ClassSchema)
