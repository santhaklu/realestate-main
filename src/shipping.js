import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './shipping.css'; // Import the shipping.css file for styling
import BuyerNav from './buyernav'; // Import the BuyerNav component

function ShippingForm() {
  const location = useLocation(); 
  const navigate = useNavigate(); // To navigate to the invoice page
  const art = location.state; // Access the art data from the state

  const [shippingAddress, setShippingAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the form data to send to the invoice page
    navigate('/invoice', {
      state: {
        artseller: art.sellerName,
        artid: art.artId,
        orderId: 'ORD123', // You can generate a static or dynamic order ID here
        shippingAddress: shippingAddress,
        price: art.cost,
        status: "Confirmed", // Or the actual status if available
        productName: art.title,
        artdimensions: art.dimensions,
        artimage: art.imageUrl,
      }
    });
  };

  return (
    <div>
      <BuyerNav />
      <h2>Shipping for {art.title}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="artid">Property ID:</label>
          <input type="text" id="artid" name="artid" value={art.artId} readOnly />
        </div>

        <div>
          <label htmlFor="arttitle">Property Title:</label>
          <input type="text" id="arttitle" name="arttitle" value={art.title} readOnly />
        </div>

        <div>
          <label htmlFor="artmedium">Property Medium:</label>
          <input type="text" id="artmedium" name="artmedium" value={art.medium} readOnly />
        </div>

        <div>
          <label htmlFor="artdimensions">Property Dimensions:</label>
          <input type="text" id="artdimensions" name="artdimensions" value={art.dimensions} readOnly />
        </div>

        <div>
          <label htmlFor="artcost">Property Cost:</label>
          <input type="text" id="artcost" name="artcost" value={art.cost} readOnly />
        </div>

        <div>
          <label htmlFor="artseller">Seller Name:</label>
          <input type="text" id="artseller" name="artseller" value={art.sellerName} readOnly />
        </div>

        <div>
          <label htmlFor="artimage">Property Image:</label>
          <img src={art.imageUrl} alt={art.title} width="200px" />
        </div>

        <div>
          <label htmlFor="shippingaddress">Shipping Address:</label>
          <textarea
            id="shippingaddress"
            name="shippingaddress"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            required
          />
        </div>

        <div>
          <button type="submit">Confirm</button>
        </div>
      </form>
    </div>
  );
}

export default ShippingForm;
