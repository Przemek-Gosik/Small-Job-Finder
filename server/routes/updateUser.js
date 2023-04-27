const router = require("express").Router()
const { User, validate } = require("../models/user")
const bcrypt = require("bcrypt")
router.put("/", async (req, res) => {
try {
    console.log("tuaj")
const { error } = validate(req.body)
if (error)
return res.status(400).send({ message: error.details[0].message })
const hashPassword = await bcrypt.hash(req.body.password, salt)
await  User.findByIdAndUpdate(req.user.id,{ ...req.body, password: hashPassword })
res.status(201).send({ message: "Zaktualizowano użytkownika" })
} catch (error) {
    console.log(error)
res.status(500).send({ message: "Wewnętrzny błąd serwera" })
console.log(error)
}
})
module.exports = router