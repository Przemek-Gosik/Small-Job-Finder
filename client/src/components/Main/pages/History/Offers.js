import Offer from "./Offer"
function Offers(props){
    const offers = props.offers;
    return(<div>
        <h2>Lista stworzonych ofert</h2>
        <ul>{offers.map((offer)=><Offer key={offer._id}value={offer._id}offer={offer}/>)}</ul>
    </div>)
}
export default Offers