import React from 'react';
import './vieworders.css'; // Ensure the CSS file is correctly linked
import Header from './sellernav';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

const ViewOrders = () => {
    // Sample data to mimic shipviewList
    const shipviewList = [
        {
            orderId: '123#001',
            artCost: '$200',
            artDimensions: '24x36',
            artId: 'A101',
            artImage: image3,
            artMedium: 'Aparment',
            artSeller: 'Vikram',
            artTitle: 'apartment',
            buyerId: 'B001',
            buyerName: 'Jane Smith',
            orderStatus: 'Ordered',
            shippingAddress: '123 Main St, Vijayawada',
        },
        {
            orderId: '123#002',
            artCost: '$150',
            artDimensions: '18x24',
            artId: 'A102',
            artImage: image2,
            artMedium: 'Individual House',
            artSeller: 'Kiran',
            artTitle: 'House',
            buyerId: 'B002',
            buyerName: 'Robert Brown',
            orderStatus: 'Delivered',
            shippingAddress: '456 Elm St, vijayawada',
        },
        {
            orderId: '123#003',
            artCost: '$300',
            artDimensions: '30x40',
            artId: 'A103',
            artImage: image1,
            artMedium: 'duplex Villa',
            artSeller: 'Surya',
            artTitle: 'Luxury Villa',
            buyerId: 'B003',
            buyerName: 'Sara Davis',
            orderStatus: 'Canceled',
            shippingAddress: '789 Oak St, Villageton',
        },
    ];

    // Function to get the color based on order status
    const getStatusColor = (orderStatus) => {
        switch (orderStatus) {
            case 'Canceled':
                return 'red';
            case 'Ordered':
                return 'green';
            case 'Delivered':
                return 'blue';
            default:
                return 'black';
        }
    };

    return (
        <div>
        <Header/>
        <div className="container">
            <div className="order-table">
                {shipviewList && shipviewList.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Property Cost</th>
                                <th>Property Dimensions</th>
                                <th>Property ID</th>
                                <th>Property Image</th>
                                <th>Property Medium</th>
                                <th>Property Seller</th>
                                <th>Property Title</th>
                                <th>Buyer ID</th>
                                <th>Buyer Name</th>
                                <th>Order Status</th>
                                <th>Shipping Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shipviewList.map((order, index) => (
                                <tr key={index}>
                                    <td>{order.orderId}</td>
                                    <td>{order.artCost}</td>
                                    <td>{order.artDimensions}</td>
                                    <td>{order.artId}</td>
                                    <td>
                                        <img
                                            src={order.artImage}
                                            alt={order.artTitle}
                                            style={{ width: '100px', height: 'auto' }}
                                        />
                                    </td>
                                    <td>{order.artMedium}</td>
                                    <td>{order.artSeller}</td>
                                    <td>{order.artTitle}</td>
                                    <td>{order.buyerId}</td>
                                    <td>{order.buyerName}</td>
                                    <td style={{ color: getStatusColor(order.orderStatus) }}>
                                        {order.orderStatus}
                                    </td>
                                    <td>{order.shippingAddress}</td>
                                    <td>
                                        <a href={``} className="btn-update">Update</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No orders found.</p>
                )}
            </div>
        </div>
        </div>
    );
};

export default ViewOrders;
