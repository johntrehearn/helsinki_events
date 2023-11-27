import "../styles/card.css";
import sampleImg from "../assets/coffee.jpg";

function Card({ name, date, time, area, onOpen }) {
  return (
    <div className="eventCard" onClick={onOpen}>
      <img src={sampleImg} alt="sample image" className="eventCardImg"></img>
      <div className="eventCardDetails">
        <h2><span>{name}</span></h2>
        <div>
          <span>{date}</span>
          <span>{time}</span>
        </div>
        <p>{area}</p>
      </div>
    </div>
  );
}

export default Card;
