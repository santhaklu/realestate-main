import React from 'react';
import './invoice.css'; // Import the CSS for invoice styling
import { jsPDF } from 'jspdf'; // Import jsPDF for generating the PDF
import { useLocation } from 'react-router-dom';
import BuyerNav from './buyernav';

function Invoice() {
    const location = useLocation();
    const { artseller, artid, orderId, shippingAddress, price: artCost, status: orderStatus, productName: artTitle, artdimensions, artimage } = location.state;

    const downloadReceipt = () => {
        const doc = new jsPDF();
        
        // (PDF generation code remains unchanged)

        doc.save('receipt.pdf');
    };

    return (
        <div>
            <BuyerNav />
            <div className="invoice">
                <div className="invoice-header">
                    <h1>Order Invoice</h1>
                    <p>Thank you for your purchase!</p>
                </div>

                <div className="invoice-details">
                    <div className="details-left">
                        <div>Seller Name: {artseller}</div>
                        <div>Art ID: {artid}</div>
                        <div>Order ID: {orderId}</div>
                        <div>Shipping Address: {shippingAddress}</div>
                        <div>property Cost: <span className="total">${artCost}</span></div>
                        <div className="order-status">Order Status: {orderStatus}</div>
                        <div>Property Title: {artTitle}</div>
                        <div>Property Dimensions: {artdimensions}</div>
                    </div>
                    <div>
                        <img src={artimage} alt="Art Image" className="art-image" />
                    </div>
                </div>

                <div className="footer">
                    <p>This invoice was generated automatically. Please retain it for your records.</p>
                </div>

                <div className="download-button">
                    <button onClick={downloadReceipt}>Download Receipt</button>
                </div>
            </div>
        </div>
    );
}

export default Invoice;
