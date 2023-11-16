import '../styles/card.css';
import sampleImg from '../assets/coffee.jpg';

function Card({events}) {
    return (
        <div className="eventCard">
            <img src={sampleImg} alt="sample image" className='eventCardImg'></img>
            <section className="eventCardDetails">
                <h2>{events[0].name}</h2>
                <p>
                    <span>{events[0].date}</span>
                    <span>{events[0].hour}</span>
                </p>
                <p>{events[0].area}</p>
            </section>
        </div>
    )
}

export default Card;