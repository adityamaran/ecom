import React from 'react'
import { Link } from 'react-router-dom'
import './addtokart.css'

function Cartitem() {
  return (
    <div className='cart-item-container'>

        <div className='cart-item-1'>
            <img src='https://images.bewakoof.com/t1080/men-s-purple-beast-within-2-0-oversized-t-shirt-581488-1677228999-3.jpg'></img>

        </div>
        <div className='cart-item-2'>
            <h2>This is Product Name</h2>

            <h1 id='x1'> $ 989</h1>
            {/* <input type={'checkbox'}></input><span>it's a Gift item</span> */}


            {/* <hr></hr> */}
            <div className='p-x'>

            <Link to={'/buy/product'}><button className='btn4bb'>Buy Now</button></Link>
  <button className='btn4aa'>Delete</button>
            </div>

        </div>
      

    </div>
  )
}

export default Cartitem