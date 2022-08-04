const mongoose = require("mongoose")
const messageSchema = new mongoose.Schema({
    fullName :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    mobile :{
        type : Number,
        required : true
    },
    subject :{
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    }
})

const Messagefaq = new mongoose.model("Messagefaq",messageSchema)


module.exports = Messagefaq;