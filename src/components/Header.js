/* eslint-disable*/
import React from 'react';
import planet from '../images/planet.png';
import './Header.css';

const Header = () => (
    <div className='container'>
        <nav className="header-nav">
            <div className='header-img-div'>
                <img src={planet} alt='' className='header-img' />
                <h2>Space Travelers' Hub</h2>
            </div>
            <ul className='nav-items'>
             <li>Rocket</li>
             <li>Mission</li>
             <li>My Profile</li>

            </ul>
        </nav>
    </div>
);

export default Header;
