import { Component } from "react";
import Card from '../card/card.component'
import './card-list.style.css'

class CardList extends Component {
    render() {
        const { drivers } = this.props;
        return (
            <div className="card-list">
            {drivers.map((driver) => {
                return(
                <Card driver={driver}/>
            )})}
            </div>
        )
    }
}

export default CardList;
