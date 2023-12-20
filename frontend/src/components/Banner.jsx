import "../styles/banner.css";
import Search from "./Search";

const Banner = ({ onchange /* , updateURL */ }) => {
  return (
    <div className="banner">
      <div className="img-wrap">
        {/* <div className="fade"></div> */}
        <img src="../event-bg.jpg" alt="audience" />
      </div>

      {/* <div className="inputs">
        <div>
          <Search onchange={onchange} />
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
