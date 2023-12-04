import "../styles/banner.css";
import Search from "./Search";

const Banner = ({ onchange, updateURL }) => {
  return (
    <div className="banner">
      <div className="img-wrap">
        <div className="fade"></div>
        <img src="../event-bg.jpg" alt="audience" />
      </div>

      <div className="inputs">
        <div>
          <Search onchange={onchange} />
        </div>
        <button
          onClick={() =>
            updateURL("https://api.hel.fi/linkedevents/v1/event/?is_free=true")
          }
        >
          FREE
        </button>
        <button
          onClick={() =>
            updateURL("https://api.hel.fi/linkedevents/v1/event/?language=en")
          }
        >
          EVENTS IN ENGLISH
        </button>
      </div>
    </div>
  );
};

export default Banner;
