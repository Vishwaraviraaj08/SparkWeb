import React, {useState} from "react";
import {Routes, Route} from 'react-router-dom'
import SmoothScroll from "smooth-scroll";
import "./App.css";

import { Navigation } from "./components/navigation";
import { Home } from "./components/Home/home.jsx";
import Login from './components/newComponents/login';
import Signup from './components/newComponents/signup.js';
import Products from './components/newComponents/products';
import Profile from './components/newComponents/profile';
import Product from "./components/newComponents/products";
import ProductDetails from "./components/newComponents/productDetails";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  
  const [login, setLogin] = useState(false)
  return (
    <div>
      <Navigation login={login}/>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        {/* add .padding-correction to root elements for the following components */}
        <Route path='/login' element={<Login login={login} setLogin={setLogin}/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path="/products" element={<Product />} />
        <Route path="/products/:productId" element={<ProductDetails/>}/>
      </Routes>
      
    </div>
  );
};

export default App;
