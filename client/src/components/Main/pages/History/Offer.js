import { useState } from "react"
import Moment from 'moment'
import styles from "./styles.module.css"
import axios from "axios"
const Offer =(props)=>{
    const offer=props.offer;
    const [error, setError] = useState("")
    const handleDelete = async(e) => {
        e.preventDefault()
        const token = localStorage.getItem("token")
            if(token){
                
                try{
                    
                    const config={
                        method: 'delete',
                        url: 'http://localhost:8080/api/deleteOffer/',
                        params: {"id": offer._id},
                        headers:{'Content-Type':'application/json','x-access-token':token}
                    }
                const data = await axios(config) 
                window.location().reload("/")
               
                }catch(error){
                    if(error.response && error.response.status>=400 && error.resposne.status<=500){
                        console.log(error.response.data.message)
                        localStorage.removeItem("token")
                            
                            setError(error.response.data.message)
                            
                    }
                }
                
            }
      
        }
    
    return(<li className={styles.li}>{offer.name} <p>Opublikowano: {Moment(offer.date).format('YYYY-MM-DD')}</p><br/>
    <button className={styles.white_btn} onClick={handleDelete}>Usuń</button>
    </li>)
}
export default Offer