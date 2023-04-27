import {useEffect, useState} from "react"
import axios from "axios"
import styles from "./styles.module.css"
import Offers from "./Offers"
import Offer from "./Offer"
const History=()=>{
const [dane, ustawDane] = useState([])
const [error,setError] = useState("")
   const handleGetOffers=async (e)=>{
       
      
        const token = localStorage.getItem("token")
        if(token){
            try{
                const config={
                    method: 'get',
                    url: 'http://localhost:8080/api/history',
                    headers:{'Content-Type':'application/json','x-access-token':token}
                }
            const data =await axios(config)
            .then(res=>{
                ustawDane(res.data.data)   
            })
           
           
            }catch(error){
                if(error.response && error.response.status>=400 && error.resposne.status<=500){
                    console.log(error.response.data.message)
                    localStorage.removeItem("token")
                    window.location.reload()
                }
            }
            
        }
        
       }
        useEffect(()=>{
            handleGetOffers();

        },[]);
        console.log("tutaj")
        console.log(dane)
       
        return(
            
            <div className={styles.container}>
              {dane.length>0 ? <Offers offers={dane}/>:<p>Nie opublikowano jeszcze żadnej oferty</p>}      
            </div>
            
            
        );
    

} 

export default History