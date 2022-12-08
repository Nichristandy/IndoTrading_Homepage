import React from "react";
import { NavLink } from "react-router-dom";


const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm border">
        <div className="container-fluid">
          <a className="navbar-brand" to="#">
          <img src= "/Assets/indotrading_logo.svg" width="80" height="80"alt="IndoTrading"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  Home
                </NavLink>
              </li>  
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Produk
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/perusahaan">
                  Perusahaan
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/jasa">
                  Jasa
                </NavLink>
              </li>
            </ul>
            <div className = "buttons">
                <NavLink to="/login" className = "btn btn-outline-dark">
                    <i className="fa fa-login"></i> Login 
                </NavLink>
                <NavLink to="/register" className = "btn btn-outline-dark ms-2">
                    <i className="fa fa-user-plus me-1"></i> Register 
                </NavLink>
                <NavLink to="/cart" className= "btn btn-outline-dark ms-2">
                    <i className="fa fa-shopping-cart me-1"></i> Cart (0)
                </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
