import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'
import Axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { add } from '../store/cartSlice'
import  {useDispatch} from 'react-redux'





function Products() {




  const [detail,setDetail] = useState([]);

  

  useEffect( ()=>{

    Axios.get('http://localhost:3002/product/api').then((res)=>{
      console.log(res.data)
    setDetail(res.data);

    }).catch((err)=>{console.log(`Error found in fetching product details...! ${err}`)})

  },[])

  // const dispatch = useDispatch();

  // const handleAdd =(data) =>{

  //   console.log('adding...')
  //   // let i=1;

  //  dispatch(add(data));
   

  // }

  return (
    <>
    <h3 className='heading-background'>Top Selling Product's</h3>
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

 <Link to={`/Product/page/${data._id}` }><button id='bbb' > BUY NOW </button></Link>


</div>
</div>
        ))
      }
</div>
    </>

    )
}

export default Products