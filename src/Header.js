import React, { useState } from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider'

function Header() {
    const [{basket},dispatch] =useStateValue();
    const [menuOpen,setMenuOpen] = useState(false)


 return (
    <div className='header'>
        <Link to="/" > 
        <img className="header_logo" src="https://www.3drap.it/wp-content/uploads/bfi_thumb/amazon_logo-p2y0ibj63b3xq54clu0b5gc4r1cba7atzyb9uzp31o.jpg" alt=""
          />
          
          </Link>
       
        <div className='header_search'>
            <input className='header_searchInput' type="text" />
            <SearchIcon className="header_searchIcon" />
        </div>
        <div className='menu'>
            <span></span>
            <span></span>
            <span></span>
           

        </div>
        
        <div className="header_nav " >
        <Link to="/" >
            <div className='header_option'>
                <span className='header_optionLineOne'>Home</span>
                <span className='header_optionLineTwo'>Home</span>

            </div>
        </Link>
        <Link to="/items"> <div className='header_option'>
                <span className='header_optionLineOne'>Items</span>
                <span className='header_optionLineTwo'>or Products</span>

            </div>
        </Link>
           
            <Link to="/about">
            <div className='header_option'>
                <span className='header_optionLineOne'>About</span>
                <span className='header_optionLineTwo'>& Contact us</span>

            </div>
            </Link>
            
            <Link to="/login">
            <div className='header_option'>
                <span className='header_optionLineOne'>Hello Guest</span>
                <span className='header_optionLineTwo'>Sign in</span>
            </div>
            </Link>
            <Link to="/returns&orders">
            <div className='header_option'>
                <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>& Orders</span>

            </div>
            </Link>
           
            <div className='header_option'>
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>

            </div>
            <Link to="/checkout">
                <div className='header_optionBasket'>
                <ShoppingBasketIcon />
                <span className='header_optionLineTwo header_basketCount'>{basket.length}</span>
                 </div>
            </Link>
            


           

        </div>
        </div>
      
      
    
  )
}

export default Header
