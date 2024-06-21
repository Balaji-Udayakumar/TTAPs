// We are not using this file for header but the  src->components-> Main->index.jsx file

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo">Smith Hire</h1>
<<<<<<< HEAD
        <img src="/robert-h-smith-school-of-business-logo.png" alt="Robert H. Smith School of Business" className="smith-logo" />
=======
        <img src = "/robert-h-smith-school-of-business logo.png" alt="Robert H. Smith School of Business" className="smith-logo" />
>>>>>>> b58de56de4900e64d4b3f812251cbb4c17a78d4f
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>          
          <li><button onClick={() => console.log('Logout')}>Logout</button></li>
        </ul>
      </nav>
    </header>
  );
};  

export default Header;
