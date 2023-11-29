import "../styles/eventModal.css";
import ReactDom from "react-dom";
import parse from "html-react-parser";

function EventModal({ open, onClose, data, getTime, getDate, getArea }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className="close-button" onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </div>
        <div className="flex-container">
          <div className="img-wrap">
            <img src={data.images[0].url} alt={data.name.fi} />
          </div>

          <div className="highlights">
            <h2 className="event-title">{data.name.fi}</h2>
            <h3>Paikka | Location</h3>
            <p>{getArea(data.location["@id"])}</p>
            <h3>Milloin | When</h3>
            <p>
              {`${getDate(data.start_time, data.end_time)}
              ${
                !getTime(data.start_time, data.end_time)
                  ? ""
                  : getTime(data.start_time, data.end_time)
              }`}
            </p>
            <h3>Hinta | Price</h3>
            <p>
              {data.offers[0].is_free
                ? "Ilmainen | Free"
                : data.offers[0].price.fi}
            </p>
            <i>
              <a href="#">Show link to homepage if there is</a>
            </i>
          </div>
        </div>

        <div className="description">
          <h2>Kuvaus | Description</h2>
          <div>{parse(data.description.fi)}</div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default EventModal;
