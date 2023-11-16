import '../styles/card.css';
import sampleImg from '../assets/coffee.jpg';

function Card() {
    return (
        <div className="eventCard">
            <img src={sampleImg} alt="sample image" className='eventCardImg'></img>
            <section className="eventCardDetails">
                <h2>Event name</h2>
                <p>
                    <span>Date</span>
                    <span>, </span>
                    <span>Hour</span>    
                </p>
                <p>Area</p>
            </section>
        </div>
    )
}

export default Card;