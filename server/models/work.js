const mongoose = require("mongoose")
const Joi = require("joi")

const workSchema = new mongoose.Schema({
    name: {type: String,minlength:5, required: true},
    user_id: {type: mongoose.Schema.Types.ObjectId,required: true},
    location: {type: String, required: false},
    type: {type: String, required: true},
    salary: {type: String,required: true},
    description: {type:String, required: true},
    date : {type: Date,default: Date.now}
})
const Work = mongoose.model("Work",workSchema)
const validate = (data)=>{
    const schema = Joi.object({
        user_id : Joi.string().required().label("user_id"),
        name: Joi.string().required().label("Name"),
        location: Joi.string().label("Location"),
        type: Joi.string().required().label("Typ"),
        salary: Joi.string().required().label("Salary"),
        description: Joi.string().required().label("Description"),
        
    })
    return schema.validate(data)
}
module.exports = {Work, validate}