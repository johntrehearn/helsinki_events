import "../styles/eventModal.css";
import ReactDom from "react-dom";
import parse from "html-react-parser";
import Map from "./Map";

function EventModal({
  open,
  onClose,
  modalData,
  getTime,
  getDate,
  locationInfo,
}) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay">
        <div className="close-button" onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </div>
      </div>
      <div className="modal">
        <div className="flex-container">
          <div className="img-wrap">
            <img src={modalData.images[0].url} alt={modalData.name.fi} />
          </div>

          <div className="highlights">
            <h2 className="event-title">{modalData.name.fi}</h2>
            {locationInfo.neighborhood && (
              <div>
                <h3>Paikka | Location</h3>
                <p>{locationInfo.neighborhood}</p>
              </div>
            )}
            <h3>Milloin | When</h3>
            <p>
              {`${getDate(modalData.start_time, modalData.end_time)}
              ${
                !getTime(modalData.start_time, modalData.end_time)
                  ? ""
                  : getTime(modalData.start_time, modalData.end_time)
              }`}
            </p>
            <h3>Hinta | Price</h3>
            <p>
              {modalData.offers[0].is_free
                ? "Ilmainen | Free"
                : modalData.offers[0].price.fi}
            </p>
            {/* <i>
              <a href="#">Show link to homepage if there is</a>
            </i> */}
          </div>
        </div>

        <div className="description">
          <h2>Kuvaus | Description</h2>
          <div>{parse(modalData.description.fi)}</div>
        </div>
        <div className="map">
          <Map locationInfo={locationInfo} />
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default EventModal;
