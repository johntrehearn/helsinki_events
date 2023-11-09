import './header.css'

const Header = () => {
    return <div>
        <div className='header'>

        <h1>Helsinki Events</h1>
        <nav>
            {/*  Button for mobile menu */}
            <button className='mobile'>
                <span className='material-symbols-outlined'>menu</span>
                {/* click={() => mobile_menu()} */}
            </button>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about_the_project">About the project</a></li>
                <li><a href="contact_us">Contact Us</a></li>
            </ul>
        </nav>
        </div>
    </div>
    
    

};

export default Header;