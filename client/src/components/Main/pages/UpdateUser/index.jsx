import { useState } from "react"
import axios from "axios"
import { Link, useNavigate ,useLocation} from "react-router-dom"
import styles from "./styles.module.css"
import { useEffect } from "react";
const UpdateUser = () => {
    const location = useLocation()
    const state = location.state;
    console.log(state)
const [data, setData] = useState({
})
useEffect(()=>
setData(state)
,[]);
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
        console.log(data)
        const config={
            method: 'put',
            url: "http://localhost:8080/api/updateUser",
            headers:{'Content-Type':'application-json','x-access-token':token},
            body: data
            }

        
        await axios.put(config)
        .then(response=>console.log(response))
        
       
        navigate("/")
        
       
    }catch(error){
        console.log(error.message)
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
return (
<div className={styles.signup_container}>
<div className={styles.signup_form_container}>

<form className={styles.form_container}
 onSubmit={handleSubmit}>
<h1>Edycja konta</h1>
<input type="text"
placeholder="Imię"
name="firstName"
onChange={handleChange}
value={data.firstName}
required
className={styles.input}
/><br/>
<input
type="text"
placeholder="Nazwisko"
name="lastName"
onChange={handleChange}
value={data.lastName}
required
className={styles.input}
/><br/>
<input
type="tel"
placeholder="Numer telefonu "
name="phoneNumber"
pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
onChange={handleChange}
value={data.phoneNumber}
required
className={styles.input}
/><br/>
<input
type="text"
placeholder="Data urodzenia"
name="birthDate"
onChange={handleChange}
onFocus={(e)=>(e.target.type="date")} 
onBlur={(e)=>(e.target.type="text")}
className={styles.input}
value={data.birthDate}
required
/>   <br/> 
<input
type="email"
placeholder="Email"
name="email"
onChange={handleChange}
value={data.email}
required
className={styles.input}
/><br/>
<input
type="password"
placeholder="Hasło"
name="password"
onChange={handleChange}
value={data.password}
required
className={styles.input}
/><br/>
{error && <div
 className={styles.error_msg}>{error}</div>}<br/>
<button type="submit"
 className={styles.green_btn}>
Edytuj dane
</button>
</form>
</div>
</div>

);
};
export default UpdateUser