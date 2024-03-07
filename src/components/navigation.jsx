import React, { useState } from "react";
import {Link} from 'react-router-dom'
export const Navigation = ({login}) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            CAMWARE TECH
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            
            <li>
              <a href="/#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="/#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="/#portfolio" className="page-scroll">
                Infra-Facilities
              </a>
            </li>
            <li>
              <a href="/products" className="page-scroll">
                Products
              </a>
            </li>
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li> */}
            {/* <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li> */}
            <li>
              <a href="/#contact" className="page-scroll">
                Contact
              </a>
            </li>
            <li>
              {!login && (
                <Link to="/login" className="page-scroll">
                  LOGIN
                </Link>
              )}
              {login && (
                <div style={{position: "relative"}} className="dropdown ">
                  <button
                  style={{border: "none", backgroundColor: "inherit", }}
                    className="dropdown-toggle"
                    type="button"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    PROFILE
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu " aria-labelledby="dropdownMenu1">
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><a href="#orders">My Orders</a></li>
                    <li role="separator" className="divider"></li>
                    <li><Link to="/logout">Logout</Link></li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
