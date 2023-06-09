require('dotenv').config()
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")
const workRoutes = require("./routes/works")
const yourworkRoutes = require("./routes/getYourWorksByToken")
const worksRoutes = require("./routes/getWorksByToken")
const userDetails = require("./routes/getUserByToken")
const imageRoutes = require("./routes/images")
const userListRoutes = require("./routes/getUsersByToken")
const updateUserRoute = require("./routes/updateUser")
const deleteUserRoute = require("./routes/deleteUser")
const deleteOffer = require("./routes/deleteWork")
const tokenVerification = require('./middleware/tokenVerification')
const express = require('express')
const formidableMiddleware = require('express-formidable')
const app = express()
const cors = require('cors')
app.use(express.json())
const connection = require('./db')

app.use(cors())

connection()

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

app.use(tokenVerification)
app.use("/api/userlist", userListRoutes)
app.use("/api/userDetails",userDetails)
app.use("/api/addOffer",workRoutes)
app.use("/api/offers",worksRoutes)
app.use(formidableMiddleware());
app.use("/api/uploadImage",imageRoutes)
app.use("/api/history",yourworkRoutes)
app.use("/api/delete",deleteUserRoute)
app.use("/api/deleteOffer",deleteOffer)
app.use("/api/updateUser",updateUserRoute)
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`))
