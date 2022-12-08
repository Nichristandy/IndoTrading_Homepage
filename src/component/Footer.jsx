import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container me-5">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h4>Informasi</h4>
            <ul className="list-unstyled">
              <li>Hubungi Kami</li>
              <li>Indotrading FAQ</li>
              <li>Testimonial</li>
              <li>Karir</li>
              <li>Partners</li>
              <li>Event Indotrading</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>Beli</h4>
            <ul className="list-unstyled">
              <li>Produk Terbaru</li>
              <li>Cara Belanja</li>
              <li>Daftar Pembeli</li>
            </ul>
            <h4>Jual</h4>
            <ul className="list-unstyled">
              <li>Perusahaan Terbaru</li>
              <li>Cari Proyek</li>
              <li>Daftar Jadi Supplier</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>Our Service</h4>
            <ul className="list-unstyled">
              <li>Premium Supplier</li>
              <li>E-procurement</li>
              <li>SEO</li>
              <li>Google Ads</li>
              <li>Social Media Ads</li>
              <li>Email Bisnis</li>
              <li>Buat Website</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4 className="ms-2">Social Media</h4>
            <div className="container-social">
            <a href="https://twitter.com/indo_trading" className= "btn btn-outline-light ms-2">
            <i className="fa fa-twitter"></i>
                </a>
                <a href="https://www.facebook.com/IndoTrading/" className= "btn btn-outline-light ms-2">
            <i className="fa fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/indotrading_official/" className= "btn btn-outline-light ms-2">
            <i className="fa fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCsHwn81g7Ie_jj-IbWjKKGw" className= "btn btn-outline-light ms-2">
            <i className="fa fa-youtube"></i>
                </a>
                </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-xs-center me-5">
            &copy;{new Date().getFullYear()} Indotrading - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
