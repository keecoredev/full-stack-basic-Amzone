const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        maxlength:64
    },
    lastname:{
        type:String,
        required:true,
        maxlength:64
    },
    orders:[mongoose.SchemaTypes.ObjectId],
    address:{
        country:{
            type:String,
            required:true,
            maxlength:32
        },
        city:{
            type:String,
            required:true,
            maxlength:32
        },
        street:{
            type:String,
            required:true,
            maxlength:128,
        },
        adverts:[mongoose.SchemaTypes.ObjectId],
        cart:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:"Cart"
        }
    }
})

module.exports = mongoose.model("Customers",customerSchema);