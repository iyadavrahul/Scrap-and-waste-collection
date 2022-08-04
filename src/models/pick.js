const mongoose= require("mongoose")

const pickupSchema = new mongoose.Schema({
    fullName :{
        type : String,
        required : true
    },
    mobile :{
        type : Number,
        required : true
    },
    alternatemobile :{
        type : Number,
        required : true
    },
    houseNum:{
        type : String,
        required : true
    },
    landmark:{
        type : String,
        required : true
    },
    directionsToReach:{
        type : String,
        required : true
    }
})

const Pickuplocation = new mongoose.model("Pickuplocation",pickupSchema)

module.exports = Pickuplocation;