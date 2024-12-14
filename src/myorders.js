import React from 'react';
import { useNavigate } from 'react-router-dom';
import BuyerNav from './buyernav';
import './myorders.css'
// Sample shipping data
const shippingData = [
    {
        orderId: "ORD123",
        buyerName: "John Doe",
        shippingAddress: "123 Main St, Anytown, USA",
        productName: "Beautiful Home",
        price: "$1000",
        status: "Shipped",
        artseller: "Property Seller A",
        artid: "property001",
        arttitle: "Beautiful House",
        artdimensions: "24x36 inches",
        artimage: "path/to/image1.jpg", // Replace with actual image path
    },
    {
        orderId: "ORD124",
        buyerName: "Jane Smith",
        shippingAddress: "456 Elm St, Othertown, USA",
        productName: "Beatiful Home",
        price: "$350",
        status: "Pending",
        artseller: "Art Seller B",
        artid: "ART002",
        arttitle: "Beatiful Home",
        artdimensions: "18x24 inches",
        artimage: "path/to/image2.jpg", // Replace with actual image path
    },
    // Add more sample data as needed
];

const MyOrders = () => {
    const navigate = useNavigate();

    const handleCancel = (orderId, status) => {
        navigate(`/cancel?orderid=${orderId}&status=${status}`);
    };

    const handleDownload = (order) => {
        navigate('/invoice', { state: order });
    };

    return (
        <div>
                  <BuyerNav />

        <div className="container">
            <h1>My Bookings</h1>
            <table className="order-table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Buyer Name</th>
                        <th>Shipping Address</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {shippingData.length > 0 ? (
                        shippingData.map((order, index) => (
                            <tr key={index}>
                                <td>{order.orderId}</td>
                                <td>{order.buyerName}</td>
                                <td>{order.shippingAddress}</td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.status}</td>
                                <td>
                                    <button 
                                        className="button cancel-button" 
                                        onClick={() => handleCancel(order.orderId, order.status)} 
                                        disabled={order.status === "Canceled"}>
                                        Cancel
                                    </button>
                                    <button 
                                        className="button download-button" 
                                        onClick={() => handleDownload(order)}>
                                        Download
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" style={{ textAlign: 'center' }}>
                                No orders found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default MyOrders;
