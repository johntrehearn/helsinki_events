import "../styles/header.css";
import Search from "./Search";

const Header = ({ onchange }) => {
  return (
    <div>
      <div className="header">
        <h1>Helsinki Events</h1>
        <Search onchange={onchange} />
        <nav>
          {/*  Button for mobile menu */}
          <button className="mobile">
            <span className="material-symbols-outlined">menu</span>
            {/* click={() => mobile_menu()} */}
          </button>
          <ul>
            {/*   <li><a href="#home">Home</a></li>
                <li><a href="#about_the_project">About the project</a></li> */}
            <li>
              <a href="#footer">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
