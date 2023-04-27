import { Link } from "react-router-dom";
import styles from "./styles.module.css"

const Result = (props)=>{
    const result=props.result;
   
    
    return(
        <div className={styles.info_container}><h3><Link to="/offerDetails" state={result}>{result.name}</Link></h3>
        <h3>Opis:</h3><p>{result.description}</p>
        
        </div>
        
    )
}
export default Result