const router = require('express').Router()
const {User} = require("../models/user")

router.get("/",async(req,res)=>{
    //console.log(req.query.id)
    User.findById(req.query.id).exec()
    .then(async()=>{
        const user = await User.findById(req.query.id);
        res.status(200).send({user:user,message:"User details"});
    
        console.log(user);
    })
    .catch(error=>{
        res.status(500).send({message:error.message});
        console.log(error.message)
    });
    
})
module.exports = router