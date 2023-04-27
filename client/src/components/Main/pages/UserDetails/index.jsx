import {useEffect, useState} from "react"
import axios from "axios"
import styles from "./styles.module.css"
import Moment from 'moment'
import { Link, useLocation } from "react-router-dom"
const UserDetails=(props)=>{
    const location = useLocation()
    const state = location.state;
    const handleDelete = async(e) => {
        e.preventDefault()
        const token = localStorage.getItem("token")
            if(token){
                
                try{
                    
                    const config={
                        method: 'delete',
                        url: 'http://localhost:8080/api/delete/',
                        headers:{'Content-Type':'application/json','x-access-token':token}
                    }
                const data = await axios(config) 
               
                }catch(error){
                    if(error.response && error.response.status>=400 && error.resposne.status<=500){
                        console.log(error.response.data.message)
                        localStorage.removeItem("token")
                            
                            setError(error.response.data.message)
                            
                    }
                }
                
            }
        localStorage.removeItem("token")
       window.location.reload()
        }
        function parseJwt(token) {
            if (!token) { return; }
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse(window.atob(base64));
        }
    const [dane, ustawDane] = useState([])
    
const [error,setError] = useState("")
   const handleGetDetails=async (e)=>{
    var id;
       if(!state){
        
        const token = localStorage.getItem("token")
        id=parseJwt(token)._id        
       }else{
        id=state.id
       }
      
        const token = localStorage.getItem("token")
        if(token){
            try{
                const config={
                    method: 'get',
                    url: 'http://localhost:8080/api/userDetails',
                    params: {"id":id},
                    headers:{'Content-Type':'application/json','x-access-token':token}
                }
            const data =await axios(config)
            .then(res=>{
               
            
                ustawDane(res.data.user)
                console.log(dane._id)
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
            handleGetDetails();

        },[]);
   
      
        
            
        
      
        return(
            
               
            <div className={styles.container}>
               <h1 className={styles.box_title}>Dane użytkownika</h1>
               <div className={styles.line}>
               <h2>Imię:  </h2><p className={styles.line_p}> {dane.firstName}</p>
               </div>
               <div className={styles.line}>
               <h2>Nazwisko:</h2> <p className={styles.line_p}>{dane.lastName}</p>
               </div>
               <div className={styles.line}>
               <h2>Email:</h2><p className={styles.line_p}> {dane.email}</p>
               </div>
               <div className={styles.line}>
                <h2>Nr telefonu:</h2><p className={styles.line_p}>{dane.phoneNumber}</p>
                </div>
               <div className={styles.line}>
               <h2>Data urodzenia:</h2><p className={styles.line_p}>{Moment(dane.birthDate).format('YYYY-MM-DD')}</p>
               </div>
               <div className={styles.line}>
                {dane._id === parseJwt(localStorage.getItem("token"))._id ? <button className={styles.green_btn} onClick={handleDelete}>Usuń konto</button>  :<p></p>}
                {dane._id === parseJwt(localStorage.getItem("token"))._id ? <button className={styles.green_btn} ><Link to="/updateUser" state={dane}>Edytuj dane</Link></button>  :<p></p>}
            </div>
            </div>
            
            
            
        );
    

} 

export default UserDetails