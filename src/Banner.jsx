import { search } from "./search";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="img-wrap">
        <div className="fade"></div>
        <img src="../event-bg.jpg" alt="audience" />
      </div>

      <div className="inputs">
        <div>
          <input onChange={search} type="text" placeholder="search..." />
        </div>

        <div>
          <label htmlFor="month">
            <select name="month" id="month">
              <option value="january">January</option>
              <option value="februrary">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Banner;
