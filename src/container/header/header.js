import React from "react";
import "../../css/header.css";
import natureone from "../../images/andy-ramos-kr9HOdBFjuk-unsplash.jpg";
import naturetwo from "../../images/massimiliano-morosinotto-Tw_VQuS3Xio-unsplash.jpg";
import userimg from "../../images/user.jpg";

function Header() {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between p-1 align-items-center">
          <div className="logo">LOGO</div>
          <div className="nav">
            <ul className="d-flex">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contect Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Header;
