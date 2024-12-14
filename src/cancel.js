import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './cancelorder.css'; // Import the CSS for styling
import BuyerNav from './buyernav';
const Cancel = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    // State variables to hold form data
    const [orderId, setOrderId] = useState('');
    const [artTitle, setArtTitle] = useState('');
    const [orderStatus, setOrderStatus] = useState('Ordered');

    // Effect to decode and set the state from URL parameters
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const decodedOrderId = (params.get('orderid'));
        const decodedOrderStatus = (params.get('orderstatus'));

        setOrderId(decodedOrderId);
        setOrderStatus(decodedOrderStatus);
    }, [location.search]);

 

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a payload to send to the server
        const payload = {
            orderId,
            artTitle,
            orderStatus
        };

        // You can use fetch or axios to send the request to the server
        fetch('/cancelorder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then(response => response.json())
        .then(data => {
            // Handle successful cancellation (e.g., navigate to a confirmation page)
            if (data.success) {
                navigate('/cancellation-confirmation'); // Redirect after successful cancellation
            } else {
                alert('Cancellation failed. Please try again.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div>
                          <BuyerNav />

            <h2>Cancel Order</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="orderid">Order ID:</label>
                    <input type="text" id="orderid" name="orderid" value={orderId} readOnly />
                </div>
            
                <div>
                    <label htmlFor="orderstatus">Order Status:</label>
                    <select id="orderstatus" name="orderstatus" value={orderStatus} onChange={(e) => setOrderStatus(e.target.value)}>
                        <option value="Ordered">Ordered</option>
                        <option value="Canceled">Canceled</option>
                    </select>
                </div>
                <button type="submit" className="button cancel-button">Confirm Cancellation</button>
            </form>
        </div>
    );
};

export default Cancel;
