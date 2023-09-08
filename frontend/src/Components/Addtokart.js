import React, { useState } from 'react'
import {useDispatch} from 'react-redux'

import './addtokart.css'
import Cartitem from './Cartitem'
import {useSelector} from 'react-redux'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Button } from '@mui/material';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import { remove } from '../store/cartSlice'
import { Link } from 'react-router-dom';
// import useSelector from 'react-redux'

function Addtokart() {
  const [loading,setloading] = useState(false);

  const [total,setTotal] =  useState(0);
  let sum =0;



  const dispatch = useDispatch();
  const removecart =(iddd)=>{
    sum-=iddd.newPrice;
  
    // alert(`Product Removed Sccessfully.`)

    dispatch(remove(iddd))
    
  }

  const items = useSelector((state)=>state.cart);
  return ( <>
  <Header/>
  <div className='addtokart-container'>

<div className='add-to-kart'>
    <div className='addtokart1'>

     <h2>Shopping Cart</h2>
     <hr></hr>

{
  items.map((item)=>(


    <div className='cart-item-container'>


        <div className='cart-item-1'>
            <img src={item.productImage1}></img>

        </div>
        <div className='cart-item-2'>
            <h2>{item.productName}</h2>

            <h1 id='x1'> ₹ {item.newPrice}</h1>
            {/* <input type={'checkbox'}></input><span>it's a Gift item</span> */}


            {/* <hr></hr> */}
            <div className='p-x'>

            <Link to={'/buy/product'}><button className='btn4bb'>Buy Now</button></Link>
  <button className='btn4aa' onClick={()=>{removecart(item._id)}}>Remove</button>
            </div>

        </div>
      
       <span className='hide'> {sum= sum+item.newPrice}</span>
    </div>
  ))
}



    </div>
    <div className='addtokart2'>
        <CheckCircleRoundedIcon/>
        {/* <br></br> */}
        <p>Continue Shoping</p>
      

        <h2>Subtotal of <span>{items.length}</span> item : </h2>
        <h2>₹ {sum} </h2>
        
<br>
</br>
<button>Proceed to Pay</button>
    </div>
</div>
</div>
<Footer/>
  </>
  )
}

export default Addtokart