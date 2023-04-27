import {useState} from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import styles from "./styles.module.css"

const AddOffer = ()=>{
    const[data,setData] = useState({
        name: "",
        location: "",
        type:"",
        salary: "",
        description:""
    })
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
        }
    const handleSubmit = async(e) =>{
        
        e.preventDefault()
        const token = localStorage.getItem("token")
        if(token){
        try{
            const url = "http://localhost:8080/api/addOffer"
            const headers={headers:{'x-access-token':token}}
            const {data : res } = await axios.post(url,data,headers)
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
                <h1>Dodawanie oferty</h1>
                <input type="text"
                placeholder="Nazwa oferty"
                name="name"
                onChange={handleChange}
                value={data.name}
                minLength="5"
                required
                className={styles.input}
                /><br/>
                <select className={styles.input} onChange={handleChange} name="salary" value={data.salary} >
                    <option value="" disabled selected>Płaca</option>
                    <option value="500-999">500-999</option>
                    <option value="1000-1999">1000-1999</option>
                    <option value="2000-2999">2000-2999</option>
                    <option value="3000-wiecej">3000-więcej</option>
                </select><br/>
                <select className={styles.input} onChange={handleChange} name="type" value={data.type}>
                    <option value="" disabled selected>Rodzaj oferty</option>
                    <option value="Korepetycje">Udzielanie korepetycji</option>
                    <option value="Sprzątanie">Sprzątanie</option>
                    <option value="Opieka">Opieka nad osobami młodzszymi</option>
                    <option value="Prace remontowe">Prace remontowe</option>
                </select><br/>
                <select className={styles.input} onChange={handleChange} name="location" value={data.location}>
                    <option value="" disabled selected>Lokalizacja</option>
                    <option value="Warszawa">Warszawa</option>
                    <option value="Lublin">Lublin</option>
                    <option value="Krakow">Kraków</option>
                    <option value="Poznan">Poznań</option>
                </select><br/>
                <textarea name="description"
                 placeholder="Opis"
                 cols="40" rows="5"
                 onChange={handleChange}
                value={data.description}
                required
                className={styles.input}
                /> <br/>
                {error && <div
                className={styles.error_msg}>{error}<br/></div>}
                <button type="submit"
                className={styles.green_btn}>
                Wystaw ofertę
                </button>
                </form>



            </div>
        
    )
}
export default AddOffer;