import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import './buyernav.css'; // Adjust the path as necessary

const Header = () => {
    return (
        <header>
            <h1 style={{ margin: 0, fontSize: '1.5em' }}>The Real Estate Listing</h1>
            <nav>
                <Link to="/sellerhome">
                    <span></span> Home
                </Link>
                <Link to="/sellartreg">
                    <span></span> Add Property
                </Link>
                <Link to="/myarts">
                    <span></span> My Property
                </Link>
                <Link to="/vieworders">
                    <span></span> View Orders
                </Link>
                <Link to="/change">
                    <span></span> Change Password
                </Link>
                <Link to="/login" className="logout-icon">
                    <span></span> Logout
                </Link>
            </nav>
        </header>
    );
};

export default Header;
