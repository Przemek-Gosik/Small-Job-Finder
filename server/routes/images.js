const router = require("express").Router()
const { Image } = require("../models/image")
const formidable = require("formidable")
var fs = require("fs")



router.post("/",async(req,res,next)=>{
    
    
    try{   
    
    var obj = {
        user_id: req.user._id,
        img:{
            data: fs.readFileSync(req.files.File),
            constentType: 'image/png'
        }
    }
    
    await new Image(obj).save()
    res.status(201).send({message: "Utworzono obraz"})
    }catch(error){
        res.status(500).send({message: "Wewnętrzny błąd serwera"})
      console.log(error)
    
    }
})
module.exports = router