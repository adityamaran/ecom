import React from 'react'
import './header.css';
import {useSelector} from 'react-redux'

import { Button } from '@mui/material';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Link } from 'react-router-dom';
function Header() {

  const it = useSelector((state)=>state.cart)
  console.log(`it is ${it.length}`);
  return (
    <>

    <div className='main-header'>

        {/* Header Part 1 */}

    <div className='header-part-1'>

    <div className='header-part-1A'>
    <Link to={'/home'}> <Button> <img src='https://cdn.shopify.com/s/files/1/0633/2078/5125/files/logo_b9137860-79d7-4b52-9ec6-a6a66756ba13.png?v=1656677666'  className='header-logo'></img></Button>
    </Link>  
    </div>
    <div className='header-part-1B'>

    <div className='searchbar-item'><SearchOutlinedIcon className='searchicon'/><input className='search-bar'placeholder='Search product...' type={'search'}></input><button className='search-button' type='search'>Search</button></div>

    </div>


    </div>



    {/* Header Part 2  */}

    <div className='header-part-2'>

    <div className='header-part-2A'>

   <HeadsetMicIcon className='headphone-header-logo'/>
 <span className='contact-header'>+91 X1XX33XXX4</span>

    </div>
    
    <div className='header-part-2B'>

      <Link to={'/addtokart/product'}> <Button className='icon-color2 icon-color'> <ShoppingCartOutlinedIcon className='icon-color' /><span className='cart-count'>{(it.length==0)?<span className='display-none'/>:it.length}</span></Button> </Link>
       <Link to={'/user-info'}><Button className='icon-color1 icon-color'>   <AccountCircleIcon className='icon-color' /></Button></Link>


    </div>
    
    </div>
    </div>

    </>
  )
}

export default Header