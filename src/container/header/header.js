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

      <div className="container-fluid full-sec"></div>
      <div className="container-fluid p-0 overflow-hidden ">
        <div className="row inner-img-section">
          <div className="col-6">
            <img src={natureone} />
          </div>
          <div className="col-6 d-flex align-items-center justify-content-center ">
            {/* <img src={naturetwo} /> */}
            <div className="main_contain">
              <span className="main_head">2 Millions Diamond</span>
              <div className="row">
                <div className="col-6">
                  <div className="main_description inner_content">
                    <p className="inner-head">Lorem Ipsum is</p>
                    <p>
                      We believe that luxury should be attainable without
                      compromising on values.
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="main_description inner_content">
                    <p className="inner-head">Lorem Ipsum is</p>
                    <p>
                      We believe that luxury should be attainable without
                      compromising on values.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0 overflow-hidden ">
        <div className="row inner-img-section">
          <div className="col-6 d-flex align-items-center justify-content-center ">
            {/* <img src={naturetwo} /> */}
            <div className="main_contain">
              <span className="main_head">2 Millions Diamond</span>
              <div className="row">
                <div className="col-6">
                  <div className="main_description inner_content">
                    <p className="inner-head">Lorem Ipsum is</p>
                    <p>
                      We believe that luxury should be attainable without
                      compromising on values.
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="main_description inner_content">
                    <p className="inner-head">Lorem Ipsum is</p>
                    <p>
                      We believe that luxury should be attainable without
                      compromising on values.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img src={naturetwo} />
          </div>
        </div>
      </div>

      <div className="main-services">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="main-one-service">
                <div className="service-user">
                  <img src={userimg} />
                </div>
                <div className="user-name">
                  <p>Prama aatma</p>
                </div>
                <div className="user-description">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="main-one-service">
                <div className="service-user">
                  <img src={userimg} />
                </div>
                <div className="user-name">
                  <p>Prama aatma</p>
                </div>
                <div className="user-description">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="main-one-service">
                <div className="service-user">
                  <img src={userimg} />
                </div>
                <div className="user-name">
                  <p>Prama aatma</p>
                </div>
                <div className="user-description">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="main-one-service">
                <div className="service-user">
                  <img src={userimg} />
                </div>
                <div className="user-name">
                  <p>Prama aatma</p>
                </div>
                <div className="user-description">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0 main-section-contect">
        <div className="main-contect position-relative">
          <p>Contact Us</p>
          <div className="form-floating mb-3 position-absolute top-45 start-50 translate-middle">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
