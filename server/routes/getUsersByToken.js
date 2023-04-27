const router = require('express').Router()
const {User} = require("../models/user")

router.get("/",async(req,res)=>{
    User.find().exec()
        .then(async()=>{
            const users = await User.find();
            res.status(200).send({data:users,message:"Users list"});

        })
        .catch(error=>{
            res.status(500).send({message:error.message});
        });
        })
        module.exports = router
