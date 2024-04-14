import React from "react";
import './Navbar.css';
import image from "../assets/image.png";
import downarrow from  "../assets/downarrow.png";

const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <div className="content">
        <img className="logo-icon" alt="" src={image} />
        <div className="menu">
          <div className="item-1">
            <img className="icon" alt="" src={downarrow} />
            <div className="button-label">How to Animate</div>
            <img className="badge-icon" alt="" src={downarrow} />
          </div>
          <div className="item-1">
            <img className="icon" alt="" src={downarrow} />
            <div className="button-label">Business</div>
            <img className="badge-icon" alt="" src={downarrow} />
          </div>
          <div className="item-1">
            <img className="icon" alt="" src={downarrow} />
            <div className="button-label">Education</div>
            <img className="badge-icon" alt="" src={downarrow} />
          </div>
          <div className="item-1">
            <img className="icon" alt="" src={downarrow} />
            <div className="button-label">Social Media</div>
            <img className="badge-icon" alt="" src={downarrow} />
          </div>
          <div className="item-1">
            
            <div className="button-label">Pricing</div>
            <div className="badge">
              <img className="icon-leading" alt="" src="/icon-leading.svg" />
              <b className="label">3</b>
              <img className="icon-leading" alt="" src="/icon-trailing.svg" />
            </div>
          </div>
          <div className="item-1">
            
            <div className="button-label">About Us</div>
            <div className="badge">
              <img className="icon-leading" alt="" src="/icon-leading.svg" />
              <b className="label">3</b>
              <img className="icon-leading" alt="" src="/icon-trailing.svg" />
            </div>
          </div>
        </div>
        <div className="trailing-content">
          <div className="button">
            <img className="icon-leading2" alt="" src="/icon-leading1.svg" />
            <div className="label-container">
              <div className="button-label6">Get Started</div>
            </div>
            <img className="icon-leading2" alt="" src="/icon-leading1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
