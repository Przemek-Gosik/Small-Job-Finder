const router = require('express').Router()
const {Work} = require("../models/work")

router.get("/",async(req,res)=>{
    Work.find({type : req.query.type}).exec()
    .then(async()=>{
        const works = await Work.find({type: req.query.type});
        res.status(200).send({data:works,message:"list of offers"});
        
    })
    .catch(error=>{
        res.status(500).send({message:error.message});
        console.log(error.message)
    });
})  
module.exports=router