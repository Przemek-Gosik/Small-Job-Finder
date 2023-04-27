const router = require('express').Router()
const {Work} = require("../models/work")

router.delete("/",async(req,res)=>{
    //console.log(req.query.id)
    
    Work.findByIdAndDelete(req.query.id).exec()
    .then(async()=>{
       
        const work = await Work.findByIdAndDelete(req.query.id)
        
        res.status(200).send({message:"Offer removed"});
    
        console.log("sukces");
    })
    .catch(error=>{
        res.status(500).send({message:error.message});
        console.log(error.message)
    });
    
})
module.exports = router