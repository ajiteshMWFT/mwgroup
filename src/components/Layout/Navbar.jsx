import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  
  return (
    <header id="header" className="fixed-top header-scrolled">
      <div className="container d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <a href="/" className="d-flex align-items-center">
            <img
              src="https://iili.io/HvTpWAP.png"
              alt=""
              width={40}
              height={40}
            />
            <p className="mb-0 fs-5">
              Mushroom <br /> World <span>.</span>
            </p>
           
          </a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" class="logo me-auto me-lg-0"><img src="https://iili.io/HvTpWAP.png" alt="" class="img-fluid"/></a> */}
        <nav id="navbar" className={`navbar order-last order-lg-0 ${showMenu?"navbar-mobile":""}`}>
          <ul>
            <li>
              <a className="nav-link scrollto " href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link scrollto " href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Team
              </a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Drop Down</span> <i className="bi bi-chevron-down" />
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i className="bi bi-chevron-right" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <  >

          <i className={`bi mobile-nav-toggle ${showMenu?"bi-x":"bi-list"}`} onClick={(e) => setShowMenu(!showMenu)}/>
          </>
        </nav>
        {/* .navbar */}
        {/* <a href="#about" className="get-started-btn scrollto">
          Get Started
        </a> */}
      </div>
    </header>
  );
};

export default Navbar;
