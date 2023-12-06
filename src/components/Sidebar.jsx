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

function Sidebar({updateURL}) {
  const [navCollapse, setNavCollapse] = useState(false)
  return (
    <div className="container">

      <div className='sticky'>

      <div className='sidebar_content'>

 {/*      const handleClick1 = (e) => {
    console.log(`Button was clicked ${e}`);
    setUrl =
      'https://api.hel.fi/linkedevents/v1/event/?all_ongoing_AND=lapsi,musiikki';
      console.log(url);
  }; */}
        
      

        <div className={`sidebar-container ${navCollapse ? "navCollapse" : ""}`}>
          <div className='svg'>
          
          <Justify onClick={e => setNavCollapse(!navCollapse)}/>

          </div>


          <div className="nav-option option1" onClick={() => updateURL('https://api.hel.fi/linkedevents/v1/event/?is_free=false')}>
            {console.log(URL)}
            {/* <Speedometer2/> */}
            <i className="bi bi-calendar2-check-fill"></i>
            <h3>Today</h3>
          </div>
          <div className="nav-option option1" onClick={() => updateURL('https://api.hel.fi/linkedevents/v1/event/?is_free=true')}>
            {/* <ClipboardPulse/> */}
            <i className="bi bi-award-fill"></i>
            <h3>Popular</h3>
          </div>
        
          <div className="nav-option option1" onClick={() => updateURL('https://api.hel.fi/linkedevents/v1/event/?musiikki=true')}>
          <i className="bi bi-search-heart-fill"></i>
            <h3>Search</h3>
          </div>

          <div className="nav-option option1">
          <i className="bi bi-map-fill"></i>
          
            <h3>Map</h3>
          </div>
        
          <div className="nav-option option1">
          <i className="bi bi-shuffle"></i>
            <h3>Random</h3>
          </div>
        
      </div>
        
        </div>

      </div>
        
    </div>
  );
}

export default Sidebar;
