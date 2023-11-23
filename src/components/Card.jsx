import "../styles/card.css";
import sampleImg from "../assets/coffee.jpg";

function Card({ name, date, hour, area, onOpen }) {
  return (
    <div className="eventCard" onClick={onOpen}>
      <img src={sampleImg} alt="sample image" className="eventCardImg"></img>
      <section className="eventCardDetails">
        <h2>{name}</h2>
        <p>
          <span>{date}</span>
          <span>{hour}</span>
        </p>
        <p>{area}</p>
      </section>
    </div>
  );
}

export default Card;
