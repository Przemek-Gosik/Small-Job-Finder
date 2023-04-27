import {useEffect, useState} from "react"
import axios from "axios"
import styles from "./styles.module.css"
import Moment from 'moment'
import { Link ,useLocation} from "react-router-dom"
const OfferDetails=(props)=>{
   
   
    const location = useLocation()
    const state = location.state;

    function parseJwt(token) {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }
            
        
      
        return(
            
               
            <div className={styles.container}>
               <h1 className={styles.box_title}>Informacje o ofercie:</h1>
               <div className={styles.line}>
               <h2>Nazwa:</h2><p className={styles.line_p}> {state.name}</p>
               </div>
               <div className={styles.line}>
               <h2>Płaca:</h2> <p className={styles.line_p}>{state.salary}</p>
               </div>
               <div className={styles.line}>
               <h2>Miasto:</h2><p className={styles.line_p}> {state.location}</p>
               </div>
               <div className={styles.line}>
                <h2>Opis:</h2><p className={styles.line_p}>{state.description}</p>
                </div>
               <div className={styles.line}>
               <h2>Data opublikowania:</h2><p className={styles.line_p}>{Moment(state.dane).format('YYYY-MM-DD')}</p>
               </div>
               <div className={styles.line}>
               {state.user_id !== parseJwt(localStorage.getItem("token"))._id ?
        <h3>
        <Link to="/userDetails" state={{id:state.user_id}}>Informacje o pracodawcy</Link>
        </h3>
            :<p>Twoje ogłoszenie</p>}
               </div>
            </div>
            
            
            
        );
    

} 

export default OfferDetails