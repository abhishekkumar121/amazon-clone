import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({id,title,price,image,rating}) {
  const [{basket},dispatch] =useStateValue();

  const addToBasket = () => {
    //dispatch the item or action into data layer
    dispatch({
      type: 'ADD_TO_CART',
      items:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    });
  };
   return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                {Array(rating).fill().map((_,i)=>(<img className='product_ratingImage' src="https://www.pngfind.com/pngs/m/4-44880_image-result-for-star-vector-rating-star-single.png" alt="" />))}
                
                
            </div>
            </div>
            <img src={image} alt='' />
        
        <button className='product_button' onClick={addToBasket}>Add to cart</button>
      
    </div>
  )
}

export default Product
