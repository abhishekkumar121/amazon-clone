import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Products from "./Products";
import { productData, responsive } from "./data";


function App() {
  const product = productData.map((item) => (
    <Products
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));
  return (
    <Router>
    <div className="app">
    
      <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/checkout">
      <Header />
        <Checkout />
      </Route>
      <Route path="/">
     
      <Header />
        <Home />
      </Route>
      
        
      </Switch>
     
     
    </div>
    <Carousel showDots={true} responsive={responsive}>
  {product}
</Carousel>
    
  </Router>
  

 

 
  );
}

export default App;
