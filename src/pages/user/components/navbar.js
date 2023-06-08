import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header id="header-section">
      <div className="overlay">
        <div className="container">
          <div className="row d-flex header-area">
            <div className="logo-section flex-grow-1 d-flex align-items-center">
              <Link className="site-logo site-title" to="/">
                <img src="./assets/images/logo.png" alt="site-logo" />
              </Link>
            </div>
            <button className="navbar-toggler ml-auto collapsed" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>
            <nav className="navbar navbar-expand-lg p-0">
              <div className="navbar-collapse collapse" id="navbarSupportedContent">
                <ul className="navbar-nav main-menu ml-auto">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/tour">Tournaments</Link></li>
                  {/* <li className="menu_has_children"><Link to="#0" className="active">Tournaments</Link>
                    <ul className="sub-menu">
                      <li><Link to="tournaments.html">Tournaments</Link></li>
                      <li><Link to="tournaments-single.html">Tournaments Single</Link></li>
                    </ul>
                  </li> */}
                  <li className="menu_has_children"><Link to="#0">Dashboard</Link>
                    <ul className="sub-menu">
                      <li><Link to="">Shop</Link></li>
                      <li><Link to="">Shop Details</Link></li>
                      <li><Link to="">Cart</Link></li>
                      <li><Link to="">Check Out</Link></li>
                      <li><Link to="">Features</Link></li>
                      <li><Link to="/profile/aaa">Profile</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </nav>
            <div className="right-area header-action d-flex align-items-center">
              {/* <div className="search-icon">
                <Link to="#"><img src="./assets/images/search_btn.png" alt="icon" /></Link>
              </div>
              <div className="lang d-flex align-items-center">
                <select>
                  <option value="1">EN</option>
                  <option value="2">BN</option>
                  <option value="3">ES</option>
                  <option value="4">NL</option>
                </select>
              </div> */}
              <Link to="/login" className="login-btn">Login</Link>
              <Link to="/register" className="cmn-btn">Join Now!</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;