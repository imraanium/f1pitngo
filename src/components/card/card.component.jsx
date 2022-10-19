import { Component } from "react";
import './card.style.css';

class Card extends Component {
    render() {
        const { name, id } = this.props.driver;
        return (
            <div className="card-container">
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`driver ${name}`} />
                <h2 class='card-name'>{name}</h2>
            </div>
        )
    }
}

export default Card;