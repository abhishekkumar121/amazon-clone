import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'


function Checkout() {
  const[{basket},dispatch]=useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_ad' src="https://external-preview.redd.it/6O61chOQmmkdSiLrfDXw-5IsicjgSKYG5i9HKM0IQKc.jpg?auto=webp&s=f9fcf5990d4fc95372d758d9b01722a6b2a61948" alt='' 
        />
        <div>
            <h2 className='checkout_title'>Your shopping Basket</h2>
            {basket.map(items =>(
              <CheckoutProduct 
              id={items.id}
              title={items.title}
              image={items.image}
              price={items.price}
              rating={items.rating} />

            ))}
            
        </div>
         </div>
         <div className='checkout_right'>
            <Subtotal />
            
         </div>
    </div>
  )
}

export default Checkout
