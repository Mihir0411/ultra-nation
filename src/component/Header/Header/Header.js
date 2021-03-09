import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <Link to="home">Home</Link>
                <Link to="/about">About</Link>
                <a href="">Contact</a>
            </nav>
        </div>
    );
};

export default Header;