const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const Joi = require("joi")
const imageSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId,required:true},
    img:
    {
        data:{ type: Buffer,required:true},
        contentType: {type: String,required:true}
    }
});
const Image = mongoose.model("Image",imageSchema)
module.exports = {Image}