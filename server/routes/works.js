const router = require("express").Router()
const{Work,validate} = require("../models/work")


router.post("/",async(req,res)=>{
    
    try{
        var prevBody = req.body
        console.log(req.user._id)
        const { error } = validate(Object.assign(prevBody,{user_id: req.user._id}))
        //console.log(Object.assign(prevBody,{user_id: req.user.id}))
        if(error)
        return res.status(400).send({message: error.details[0].message})
        const work = await Work.findOne({ name : req.body.name })
        if(work)
        return res
        .status(409)
        .send({message: "Podana nazwa oferty jest już zajęta!"})
        await new Work({...req.body}).save()
        res.status(201).send({message: "Utworzono ofertę"})
    }catch(error){
        res.status(500).send({message: "Wewnętrzny błąd serwera"})
        console.log(error)
    
    }
})
module.exports = router