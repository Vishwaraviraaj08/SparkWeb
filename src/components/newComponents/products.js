import React from "react";
import {Link} from "react-router-dom";
import data from "../../data/productInfo.js";
export default function Products() {

    return (
        <div className='padding-correction'>
        <h2 style={{paddingTop: '100px', textAlign: 'center'}}>Products</h2>
        <div className="container" style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '30px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly'
        }}>
            {data.map((item, index) => (
                <div className="column "
                     style={{flexBasis: 'calc(50% - 50px)', margin: '0px auto 20px', boxSizing: 'border-box'}}
                     key={index}>
                    <img src={item.imageLink} alt="Image"
                         style={{
                             maxWidth: '450px',
                             height: '450px',
                             objectFit: 'contain',
                             aspectRatio: '1/1'
                         }}/>
                    <h2 style={{fontSize: '18px', marginTop: '10px'}}>{item.productName}</h2>
                    <p>{item.shortDescription}</p>
                    <Link to={item.productLink} style={{textDecoration: 'none', color: 'black'}}>Purchase</Link>
                </div>
            ))}
        </div>
        </div>
    );
}