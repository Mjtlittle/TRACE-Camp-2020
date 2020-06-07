import React from 'react';
import './Navbar.css';

import { IconContext } from 'react-icons';
import { FaPlane } from 'react-icons/fa';


const Navbar = (props) => {
    return (
        <div className='Navbar'>
            <IconContext.Provider value={{ className: 'Navbar-icon' }}>
                <FaPlane />
            </IconContext.Provider>
            <div className='Navbar-expander'/>
            {props.children}
            <img className='Navbar-profile hover-grow' src={props.profileSrc} alt='profile'/>
        </div>
    );
}

Navbar.defaultProps = {
    profileSrc: 'https://unsplash.com/photos/0fKMSXKi7sM/download?force=true&w=320',
}

export default Navbar;
