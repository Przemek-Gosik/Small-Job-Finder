const router = require('express').Router()
const {User} = require("../models/user")
const {Work} = require("../models/work")

router.delete("/",async(req,res)=>{
    //console.log(req.query.id)
    
    User.findByIdAndDelete(req.user._id).exec()
    .then(async()=>{
       await Work.deleteMany({user_id:req.user._id})
        const user = await User.findByIdAndDelete(req.user._id)
        
        res.status(200).send({message:"User removed"});
    
        console.log("sukces");
    })
    .catch(error=>{
        res.status(500).send({message:error.message});
        console.log(error.message)
    });
    
})
module.exports = router