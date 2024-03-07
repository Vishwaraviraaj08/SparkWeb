import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container" id="bg-pic">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text h2">
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  <p id="desc-header">{props.data ? props.data.paragraph : "Loading"}</p>
                  <Link
                      to="/products"
                      className="btn btn-custom btn-lg page-scroll"
                  >
                    View Products
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
};
