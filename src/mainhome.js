import React from 'react';
import './mainhome.css'; // Assuming CSS is in the same folder or adjusted accordingly

const MainHome = () => {
  return (
    <div>
      <div className="video-container">
        <video autoPlay muted loop>
          <source 
            //src="https://media.istockphoto.com/id/1483895619/video/creative-artist-wearing-a-white-t-shirt-black-apron-with-headphones-on-is-creating-an.mp4?s=mp4-640x640-is&k=20&c=pxc5Y4__eCQcZcBB2uwhrEOrnFm43QNEc8X677R1VkM=" 
            //type="video/mp4"
          />
        </video>
      </div>

      <div className="content-overlay">
        <h2>Welcome to Real Estate</h2>
        
        <div className="link-container">
          {/* Use React Router for navigation */}
          <a href="/">Home</a>
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
