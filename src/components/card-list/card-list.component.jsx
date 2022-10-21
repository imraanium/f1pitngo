import Card from '../card/card.component'
import './card-list.style.css'

const CardList = ({drivers}) => (
    <div className="card-list">
        {drivers.map((driver) => {
            return(
            <Card key={driver.id} driver={driver}/>
        )})}
    </div>
);

export default CardList;
