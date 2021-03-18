import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="container matha">
            <div className="row">
                <nav className=" text-center">
                    <Link to="home">Home</Link>
                    <Link to="/login">Login</Link>
                    
                   
                </nav>
            </div>
        </div>
    );
};

export default Header;