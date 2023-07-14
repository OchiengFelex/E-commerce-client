import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './Cart.css'


function Cart() {




  return (
    <div className='main-cart'>
        <div className='cart-content1'>
        <BsCart3 className='cart-icon'/>
        <br/> <br/>
        <div className='cart-content2'>
            <h1>Your  Cart  Is  Empty !!</h1><br/>
            <pre>Browse our categories and discover our best  and  most<br/>
                            affordable  deals</pre><br/><br/>
            <button className='cart-btn'><Link to="/collections"> Continue Shopping</Link></button>
        </div>
    </div>
    </div>
  )
}


export default Cart