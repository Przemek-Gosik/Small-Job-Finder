import {useState} from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import styles from "./styles.module.css"

const AddOffer = ()=>{
    const [selectedFile,setSelectedFile] = useState(null)
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const handleFileSelect = (e)=>{
        setSelectedFile(e.target.files[0])
    }
    const handleSubmit = async(e) =>{
        
        e.preventDefault(selectedFile)
        console.log(selectedFile)
        const formData = new FormData();
        formData.append("File",selectedFile)
        console.log(formData)
        const token = localStorage.getItem("token")
        if(token){
        try{
            const url = "http://localhost:8080/api/uploadImage"
            const headers={headers:{'Content-Type':'multipart/form-data','x-access-token':token}}
            const {formData : res } = await axios.post(url,formData,headers)
            navigate("/")
            console.log(res.message)
        }catch(error){
            if(
                error.response && 
                error.response.status >= 400 &&
                error.response.status <= 500
            ){
                setError(error.response.data.message)
            }
        }
    }
    }
    return(
        <div className = {styles.container}>
           
            <form className={styles.form_container}
                onSubmit={handleSubmit}>
                <h1>Dodawanie zdjęcia profilowego</h1>
                <input className={styles.input} type="file" id="image" onChange={handleFileSelect} required/>
                {error && <div
                className={styles.error_msg}>{error}</div>}
                <button type="submit"
                className={styles.green_btn}>
                Ustaw zdjęcie
                </button>
                </form>



            </div>
        
    )
}
export default AddOffer;