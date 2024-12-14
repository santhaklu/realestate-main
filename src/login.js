import React, { useState } from 'react';
import './login.css'; // Assuming the CSS file is in the same directory or path is adjusted
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation and useNavigate for programmatic navigation

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check credentials
    if (email === 'demo@gmail.com' && password === 'demo') {
      navigate('/buyerhome'); // Redirect to BuyerHome
    } else if (email === 'demo1@gmail.com' && password === 'demo') {
      navigate('/sellerhome'); // Redirect to SellerHome
    } else {
      alert('Invalid credentials'); // Show error message
    }
  };

  return (
    <div>
      <header className="main-header">
        <div className="logo">
          <h1>REAL ESTATE LISTING</h1>
        </div>  
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="#">Contact</Link>
        </nav>
      </header>

      <div className="background-image"></div>

      <div className="illustration-left">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/8761/8761422.png" 
          alt="Cartoon illustration left"
        />
      </div>
      <div className="illustration-right">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/8761/8761414.png" 
          alt="Cartoon illustration right"
        />
      </div>

      {/* Login Form */}
      <div className="container">
        <h2>Login</h2>
        <p> For Buyerlogin email : demo@gmail.com</p>
        <p>Seller Login email : demo1@gmail.com</p>
        <p>Passowrd : demo (Comman for both)</p>
        <form onSubmit={handleSubmit}> {/* Handle submit via JavaScript */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="text" 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              required 
            />
          </div>

          <button type="submit">Login</button>

          <div className="signup-link">
            <p>Don't have an account? <Link to="/register">Create an account</Link></p>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
