import React, {useEffect} from 'react'
import {Router, useParams, Navigate} from "react-router-dom";
import data from "../../data/productInfo.js";
import {useNavigate} from "react-router-dom";

export default function ProductDetails() {
    let {productId} = useParams();

    let item = data.find((item) => {
        if (item.productCode === productId) {
            return item;
        }
    });
    if(!item) {
        return <Navigate to="/"/>
    }

    return (<>

        <style>
            {`

p .paragraph {
  font-size: 12px;
  color: #111111;
}          
.btn-product-details {
  width: fit-content;
  font-size: 12px;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;
}
.btn_primary {
  background-color: #111111;
  color: #ffffff;
  padding: 20px 60px;
}
.btn_outline {
  border: 2px solid #ded3aa;
  padding: 16px 48px;
}
.btn_outline_secondary {
  border: 1px solid #e1e1e1;
  padding: 20px 40px;
  margin-left: 20px;
}
.btn_outline:hover {
  background-color: #f5f5f5;
}
#product {
  width: auto;
  margin: 50 50;
  margin-top: 48px;
  display: flex;
  flex-wrap: nowrap;
}
.product_images {
  width: 400px;
  min-width: calc(50% - 50px);
  height: auto;
  background-color: #e1e1e1;
  background: url("${item.imageLink}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.product_details {
  flex-grow: 1;
  padding-left: 28px;
}
.product_details h4 {
  font-size: 24px;
  font-weight: 600;
  color: #111111;
}
.product_details p {
  font-size: 14px;
  color: #555555;
  font-weight: 300;
  margin-top: 35px;
  margin-bottom: 30px;
  line-height: 24px;
}
.product_details ul {
  margin-bottom: 40px;
}
.product_details ul li {
  font-size: 14px;
  color: #555555;
  font-weight: 300;
  line-height: 24px;
  margin-left: 14px;
  list-style: none;
}

.cta {
  display: flex;
  width: 100%;
  margin: 40px 0;
}

.material-symbols-outlined {
  color: #111111;
  font-size: 22px;
  cursor: pointer;
}

h2 .heading2{
  font-size: 24px;
  font-weight: 700;
  color: #111111;
}
h3 .heading3 {
  font-size: 24px;
  font-weight: 700;
  color: #68899a;
}
.about {
  margin-top: 30px;
}
.about p {
  font-size: 14px;
  margin: 0;
  color: #111111;
  font-weight: 500;
}
.about span {
  font-size: 14px;
  margin: 0;
  color: #68899a;
  font-weight: 500;
}
.cta .material-symbols-outlined {
  margin-right: 6px;
}


            
            `}
        </style>

        <div id="product" className={"padding-correction"}>
            <div className="product_images"></div>
            <div className="product_details">

                <h2 className='heading2'>{item.productName}</h2>
                <h3 className='heading3'>{item.price}</h3>

                <div className="about">
                    <p className='paragraph '>Availability :<span>{item.availability}</span></p>
                    <p className='paragraph '>Product Code : <span>{item.productCode}</span></p>
                </div>

                <p style={{fontSize: '20px'}}>{item.longDescription}</p>
                <ul>
                    <li>{item.shortDescription}</li>
                </ul>


                <div className="cta">
                    <div className="btn-product-details btn_primary">add to cart</div>
                    <div className="btn-product-details btn_outline_secondary">
                        <span className="material-symbols-outlined"></span><b>Order</b></div>
                </div>
            </div>
        </div>
    </>)
}
