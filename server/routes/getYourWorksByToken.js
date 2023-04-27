const router = require('express').Router()
const {Work} = require("../models/work")

router.get("/",async(req,res)=>{
    
   Work.find({user_id : req.user._id}).exec()
        .then(async()=>{
            const offers = await Work.find({user_id: req.user._id});
            console.log(offers)
            res.status(200).send({data:offers,message:"Offers list"});
            
        })
        .catch(error=>{
            res.status(500).send({message:error.message});
            
        });
        })
        module.exports = router