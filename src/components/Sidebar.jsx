import { useState } from "react";
import "./Sidebar.css";

/* npm install react-bootstrap-icons --save */

/* import * as Icon from 'react-bootstrap-icons'; */
import { Speedometer2 } from "react-bootstrap-icons";
import { ClipboardPulse } from "react-bootstrap-icons";
import { ChatSquare } from "react-bootstrap-icons";
import { Gear } from "react-bootstrap-icons";
import { Power } from "react-bootstrap-icons";
import { Justify } from "react-bootstrap-icons";

function Sidebar({updateURL}) {
  const [navCollapse, setNavCollapse] = useState(true)
  return (
    <div className="container">

      <div className='sticky'>

      <div className='sidebar_content'>

      

        <div className={`sidebar-container ${navCollapse ? "navCollapse" : ""}`}>
          <div className='svg'>
          
          <Justify onClick={e => setNavCollapse(!navCollapse)}/>

          </div>

          <div className="nav-option option1" onClick={() => updateURL('https://api.hel.fi/linkedevents/v1/event/?start=now&end=today')}>
            {console.log(URL)}
            {/* <Speedometer2/> */}
            <i className="bi bi-calendar2-check-fill"></i>
            <h3>Today</h3>
          </div>
          <div className="nav-option option1" onClick={() => updateURL('https://api.hel.fi/linkedevents/v1/event/?days=7')}>
            {/* <ClipboardPulse/> */}
            <i className="bi bi-calendar-week"></i>
            <h3>This Week</h3>
          </div>
        
          <div className="nav-option option1" onClick={() => updateURL('https://api.hel.fi/linkedevents/v1/event/?musiikki=true')}>
          <i className="bi bi-piggy-bank"></i>
            <h3>Free</h3>
          </div>

          <div className="nav-option option1" onClick={() => updateURL('https://api.hel.fi/linkedevents/v1/event/?internet_based=true')}>
          <i className="bi bi-music-note-list"></i>

            <h3>Music</h3>
          </div>
        
          <div className="nav-option option1" onClick={() => updateURL('https://api.hel.fi/linkedevents/v1/event/?is_free=true')}>
          <i className="bi bi-router"></i>
            <h3>Internet</h3>
          </div>
        
      </div>
        
        </div>
      </div>
    </div>
  );
}

export default Sidebar;