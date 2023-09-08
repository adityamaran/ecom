import React, { useState } from 'react'
import './buypage.css'
import Category from '../Common/category'
import Header from '../Common/Header'
import { Button } from '@mui/material'
import Footer from '../Common/Footer'
import { Link, useParams } from 'react-router-dom'
import Axios from 'axios'
import { useEffect } from 'react'
import { add } from '../store/cartSlice'
import  {useDispatch} from 'react-redux'


function Buypage() {
 
  
const { id } = useParams();
const [detail,setDetail] = useState('');
const [pd,setPd] = useState({})

console.log(id);
const fun = async() =>{
  await  Axios.get(`http://localhost:3002/${id}`).then((ress)=>{
    setDetail(ress.data);
    setPd(ress.data)
    console.log(ress);
    console.log("Single Product Detail...")

  })

}
  
useEffect(()=>{
  fun();



},[])

const dispatch = useDispatch();
  

const handleAdd =(product) =>{
  alert(`${product.productName} Added to your Cart-List`)

 dispatch(add(product));

}

  return (
    <>
    <Header/>
    <Category/>
    <hr></hr>
    <div className='buy-page-grid'>
        <div className='buy-page-grid1'>
            <div> <img src={detail.productImage1} className="product-image-side"></img></div>
            <div>  <img src={detail.productImage2} className="product-image-side"></img></div>
           <div> <img src={detail.productImage3} className="product-image-side"></img></div>
          <div> <img src={detail.productImage4} className="product-image-side"></img>
        </div>
        <div> <img src={detail.productImage5} className="product-image-side"></img></div>
        <div> <img src={detail.productImage2} className="product-image-side"></img></div>
       </div> 
       

        <div className='buy-page-grid2'>
 <img src={detail.productImage1}></img>
</div>

<div className='buy-page-grid3'>
  <h2>{detail.productName}</h2>
<h5>{detail.ProductDis}</h5>
<hr></hr>
<h1>₹ {detail.newPrice}<span className='fake-price'>  ₹{detail.oldPrice}<span className='fake-price-slas' >______</span></span></h1>

{/* <hr></hr> */}
{/* <div className='bc-btn'> */}
<Link to={"/user-details"}> <button className='btn4banda btn4b' id='xcx'>Buy Now</button></Link>
  <button className='btn4banda btn4a' onClick={()=>{handleAdd(pd)}} >Add to Kart</button>
</div>

        
    </div>
    {/* </div> */}
    <Footer/>
    </>
  
  )
}

export default Buypage