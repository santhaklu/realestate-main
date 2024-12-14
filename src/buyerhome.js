import React from 'react';
import './buyerhome.css'; // Ensure the CSS file is in the correct path
import BuyerNav from './buyernav'; // Import the BuyerNav component

const BuyerHome = ({ consumer }) => {
    return (
        <div className='content'>
            <BuyerNav /> {/* Include the navigation bar */}

            <div className="main-content">
                <div className="hero-section">
                    <div className="hero-content">
                        <h1>Welcome, {consumer?.name}!</h1>
                        <p>Real estate is an imperishable asset, ever increasing in value. It is the most solid security that human ingenuity has devised. It is the basis of all security and about the only indestructible security.</p>
                    </div>
                </div>

                <div className="quote-section">
                    <blockquote>
                        "If you don’t own a home, buy one. If you own a home, buy another one. If you own two homes buy a third. And lend your relatives the money to buy a home.” – John Paulson
                    </blockquote>
                </div>

                <div className="features-section">
                    <h2>Why You'll Love Our Platform</h2>
                    <ul className="features-list">
                        <li> Discover unique home places curated just for you</li>
                        <li>Secure and easy-to-use purchasing options</li>
                        <li> Connect with your favorite Models and stay updated</li>
                    </ul>
                </div>

                <div className="testimonials">
                    <h2>What Our Buyers Say</h2>
                    <blockquote>
                        "This platform changed the way I purchase home. It’s seamless and fun!" – Emily R.
                    </blockquote>
                    <blockquote>
                        "I found the perfect place for my home, and the process was so easy." – John D.
                    </blockquote>
                </div>

                {/* Uncomment the footer if needed */}
                {/* <footer>
                    <p>&copy; 2024 ArtWorld. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
                </footer> */}
            </div>
        </div>
    );
};

// Export the component
export default BuyerHome;
