import { useState } from "react"
import axios from "axios"
import Results from "./Results"
import { Link, useNavigate } from "react-router-dom"
import styles from "./styles.module.css"
const Search = () => {
    const[data,setData] = useState({
        type:""
    })
const [dane,ustawDane] = useState([])
const [error, setError] = useState("")

const handleChange = ({ currentTarget: input }) => {
setData({ ...data, [input.name]: input.value })
}
const handleSubmit = async (e) => {
       e.preventDefault()
            const token = localStorage.getItem("token")
            if(token){
                
                try{
                    
                    const config={
                        method: 'get',
                        url: 'http://localhost:8080/api/offers/',
                        params: {"type":data.type},
                        headers:{'Content-Type':'application/json','x-access-token':token}
                    }
                const {data:res} = await axios(config)
            
                    ustawDane(res.data)
                    console.log(res.data)
                
               
               
                }catch(error){
                    if(error.response && error.response.status>=400 && error.resposne.status<=500){
                        console.log(error.response.data.message)
                        localStorage.removeItem("token")
                            
                            setError(error.response.data.message)
                            
                    }
                }
                
            }
            
           
}
return (
<div className={styles.search_container}>
<div className={styles.search_form_container}>
<div className={styles.left}>
<form className={styles.form_container}
 onSubmit={handleSubmit}>
<h1>Znajdź ofertę o konkretnej kategorii</h1>
<select className={styles.input} onChange={handleChange} name="type" value={data.type}>
                    <option value="" disabled selected>Rodzaj oferty</option>
                    <option value="Korepetycje">Udzielanie korepetycji</option>
                    <option value="Sprzątanie">Sprzątanie</option>
                    <option value="Opieka">Opieka nad osobami młodzszymi</option>
                    <option value="Prace remontowe">Prace remontowe</option>
                </select><br/>
{error && <div
 className={styles.error_msg}>{error}</div>}
<button type="submit"
 className={styles.white_btn}>
Wyszukaj
</button>
</form>
</div>
<div className={styles.right}>
<h1>Wyniki:</h1>
<div>
{dane.length>0 ? <Results results={dane}/>: <p>Brak rezultatów</p>}
</div>
</div>

</div>
</div>
);
};
export default Search