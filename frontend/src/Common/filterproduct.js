import axios from 'axios';
import './product.css'
import {Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Category from './category';
import Footer from './Footer';
import Header from './Header';

function Filterproduct() {
    const [detail,setDetail] = useState([]);

    useEffect(()=>{
       async function temp(){

        await axios.get('http://localhost:3002/product/filter-male').then((res)=>{
            console.log(res.data)
          setDetail(res.data);
      
          }).catch((err)=>{console.log(`Error found in fetching product details...! ${err}`)})



       }
       temp();

    },[])
  return (
   
<div>
    <Header></Header>
    <Category></Category>
    <div className='productContainer'>
    {
           detail.map((data)=>(
           
            <div className='product-container' key={data._id}>
            
            <div className='product' > 
            <h3>{data.productName}</h3>
            <h5>{data.ProductDis}</h5>
            <img src={data.productImage1}></img>
            
            
            <h4><span>MRP {data.oldPrice}</span> {data.newPrice}</h4>
            
            {/* <button id='bbb' onClick={()=>{handleAdd(data)}}> BUY NOW </button> */}
            
             <Link to={`Product/page/${data._id}` }><button id='bbb' > BUY NOW </button></Link>
            
            
            </div>
            </div>
                    ))
                  }
                  </div>
                  <Footer></Footer>
    
</div>

  )
}

export default Filterproduct