import Result from "./Result"
import styles from "./styles.module.css"
function Results(props){
   const results = props.results;
   return(
    <div className={styles.container}>
        {results.map((result)=><Result key={result._id}value={result._id} result={result}/>)}
    </div>
   );
}
export default Results