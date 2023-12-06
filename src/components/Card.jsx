import "../styles/card.css";
import sampleImg from "../assets/coffee.jpg";
import { MusicNote } from 'react-bootstrap-icons';

function Card({ name, date, time, area, onOpen, getDataForModal, id }) {
  return (
    <div className="Card">
      <div
        className="eventCard"
        onClick={() => {
          onOpen();
          getDataForModal(id);
        }}
      >
        <img src={sampleImg} alt="sample image" className="eventCardImg"></img>
        <div className="eventCardDetails">
          <h2>
            <span>{name}</span>
          </h2>
          <div>
            <span>{date}</span>
            <span>{time}</span>
          </div>
          <p>{area}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;


