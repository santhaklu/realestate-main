import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainHome from './mainhome';
import Login from './login';
import Register from './Register';
import BuyerHome from './buyerhome';
import ArtExplore from './artexplore';
import ShippingForm from './shipping';
import Invoice from './invoice';
import MyOrders from './myorders';
import Cancel from './cancel';
import ChangePassword from './changepwd';
import SellerHome from './sellerhome';
import ArtRegistration from './sellartreg';
import MyArts from './myarts';
 import ViewOrders from './vieworders';
 import ChangePass from './change';
function Website() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainHome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/buyerhome" element={<BuyerHome/>} />
      <Route path="/artexplore" element={<ArtExplore/>} />
      <Route path="/shipping" element={<ShippingForm/>} />
      <Route path="/invoice" element={<Invoice/>} />
      <Route path="/myorders" element={<MyOrders/>} />
      <Route path="/cancel" element={<Cancel/>} />
      <Route path="/changepwd" element={<ChangePassword/>} />
      <Route path="/sellerhome" element={<SellerHome/>} />
      <Route path="/sellartreg" element={<ArtRegistration/>} />
      <Route path="/myarts" element={<MyArts/>} />
       <Route path="/vieworders" element={<ViewOrders/>} /> 
       <Route path="/change" element={<ChangePass/>} /> 








      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Website />, document.getElementById('root'));
