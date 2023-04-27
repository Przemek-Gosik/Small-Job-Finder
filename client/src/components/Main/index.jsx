import axios from "axios"
import { useEffect, useState } from "react"
import {Route, Router, Routes, } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Home from "./pages/Home"
import Footer from "./Footer"
import UserDetails from "./pages/UserDetails"
import styles from "./styles.module.css"
import AddOffer from "./pages/AddOffer"
import AddPhoto from "./pages/AddPhoto"
import History from "./pages/History"
import Search from "./pages/Search"
import OfferDetails from "./pages/OfferDetails"
import UpdateUser from "./pages/UpdateUser"
const Main = () => {
    

return (
    <div>
        <Navbar Navbar/>   
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/addOffer" element={<AddOffer/>}/>
            <Route path="/userDetails"  element={ <UserDetails /> }/>
            <Route path="/history" element={<History/>}/>
            <Route path="/profilePicture" element={<AddPhoto/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/offerDetails" element={<OfferDetails/>}/>
            <Route path="/updateUser" element={<UpdateUser/>}/>
        </Routes>
        <Footer Footer />
    </div>

)
}
export default Main