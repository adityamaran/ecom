import React, { useEffect } from 'react'
import Category from '../Common/category'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
import Products from '../Common/product'
import Banner from './banner'
import { Link } from 'react-router-dom'
import Banner2 from './Banner2'
import Productgrid from './Productgrid'
import Productgrid1 from './Productgrid1'
// import jwt from 'jsonwebtoken';


function Home() {
  // useEffect(()=>{
  //   const token = localStorage.getItem('token')
  //   if(token){
  //     const user = jwt.decode(token)
  //     if(!user){
  //       localStorage.removeItem('token');
  //       window.location.href ='/login '
  //     }
  //   }
  // },[])
  return (
    <div>
<Header/>
      <Category/>
     <Banner/>
    
     <Products/>
   <Banner2/>
   <Productgrid1/>
   <Productgrid/>
   {/* <Products/> */}
   <Footer/>

    </div>
  )
}

export default Home