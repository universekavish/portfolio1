import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <li>
                <Link to='/About'>About</Link>
                <Link to='/Projects'>Projects</Link>
                <Link to='/Resume'>Resume</Link>
                <Link to='/Contact'>Contact</Link>
            </li>
        </div>
    )
};

export default Navbar;