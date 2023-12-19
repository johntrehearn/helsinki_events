import "../styles/card.css";

function Card({ name, date, time, onOpen, getDataForModal, id, eventImgURL }) {
  return (
    <div className="Card">
      <div
        className="eventCard"
        onClick={() => {
          onOpen();
          getDataForModal(id);
        }}
      >
        <img src={eventImgURL} alt={name} className="eventCardImg"></img>

        <div className="eventCardDetails">
          <h2>
            <span>{name}</span>
          </h2>
          <div>
            <p className="detail">{date}</p>
            <p className="detail">{time}</p>
          </div>
          <p>{/* {area} */}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
