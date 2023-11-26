import { useState } from 'react';
import './Sidebar.css';

/* npm install react-bootstrap-icons --save */

/* import * as Icon from 'react-bootstrap-icons'; */
import { Speedometer2 } from 'react-bootstrap-icons';
import { ClipboardPulse } from 'react-bootstrap-icons';
import { ChatSquare } from 'react-bootstrap-icons';
import { Gear } from 'react-bootstrap-icons';
import { Power } from 'react-bootstrap-icons';
import { Justify } from 'react-bootstrap-icons';

function Sidebar() {
  const [navCollapse, setNavCollapse] = useState(false)
  return (
    <div className="container">
      <nav className="navSide">
        <div className='sideMenuButton'>
          <Justify onClick={e => setNavCollapse(!navCollapse)}/>

        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about_the_project">About the project</a>
          </li>
          <li>
            <a href="contact_us">Contact Us</a>
           {/*  <Speedometer2/> */}
          </li>
        </ul>
      </nav>
      
      <div className='sidebar_content'>
        
      

        <div className={`sidebar-container ${navCollapse ? "navCollapse" : ""}`}>

          <div className="nav-option option1">
            <Speedometer2/>
            <h3>Dashboard</h3>
          </div>
          <div className="nav-option option1">
            <ClipboardPulse/>
            <h3>Articles</h3>
          </div>
        
          <div className="nav-option option1">
            <ChatSquare/>
            <h3>Report</h3>
          </div>

          <div className="nav-option option1">
            <Gear/>
            <h3>Settings</h3>
          </div>
        
          <div className="nav-option option1">
            <Power/>
            <h3>Logout</h3>
          </div>
        
        
        </div>

      </div>
        
    </div>
  );
}

export default Sidebar;
