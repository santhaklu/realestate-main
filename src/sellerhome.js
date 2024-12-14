import React from 'react';
import './sellerhome.css'; // Adjust the path as necessary
import Header from './sellernav';
const SellerHome = ({ consumer }) => {
    return (
        <div class="main-container">
            <Header/>
        
        <section className="dashboard-preview">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Welcome!</h1>
                    <p>
                    Real estate is an imperishable asset, ever increasing in value. It is the most solid security that human ingenuity has devised. It is the basis of all security and about the only indestructible security..
                    </p>
                </div>
            </div>

            <div className="quote-section">
                <blockquote>
                    "Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world.” – Franklin D. Roosevelt
                </blockquote>
            </div>

            <div className="stats-summary">
                <h2>Quick Stats</h2>
                <div className="stats">
                    <div className="stat-item">
                        <h3>Property Listed</h3>
                        <p>120</p>
                    </div>
                    <div className="stat-item">
                        <h3>Orders Received</h3>
                        <p>45</p>
                    </div>
                    <div className="stat-item">
                        <h3>Total Sales</h3>
                        <p>$3,200</p>
                    </div>
                </div>
            </div>
           
        </section>
        </div>
    );
};

export default SellerHome;
