import './card.style.css';

const Card = ({driver}) => {
    const {name, id} = driver;
    return(
        <div className="card-container">
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`driver ${name}`} />
            <h2 className='card-name'>{name}</h2>
        </div>
    );
};


export default Card;