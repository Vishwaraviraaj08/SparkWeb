import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Navigation = ({login}) => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

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
          <Link className="navbar-brand page-scroll" to="/#page-top">
            CAMWARE TECH
          </Link>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            
            <li>
              <Link to="/#about" className="page-scroll">
                About
              </Link>
            </li>
            <li>
              <Link to="/#services" className="page-scroll">
                Services
              </Link>
            </li>
            <li>
              <Link to="/#portfolio" className="page-scroll">
                Infra-Facilities
              </Link>
            </li>
            <li>
              <Link to="/products" className="page-scroll">
                Products
              </Link>
            </li>
            
            <li>
              <Link to="/#contact" className="page-scroll">
                Contact
              </Link>
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
                    {/* <li><Link to="#orders">My Orders</Link></li> */}
                    <li role="separator" className="divider"></li>
                    <li><a href="/">Logout</a></li>
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
