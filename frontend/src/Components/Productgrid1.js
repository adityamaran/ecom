import React from 'react'
import SavingsIcon from '@mui/icons-material/Savings';

import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { Button } from '@mui/material';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import './productgrid.css';

function Productgrid1() {
  return (
  <>
  <div className='p-grid-1-container'>
    <Button  className='pg1-a'><div className='pg1-a'><LocalShippingOutlinedIcon className='xq'/> <span className='spanfor-icon'>FREE Dilevery</span></div></Button>
  <Button className='pg1-b'> <div className='pg1-a' ><SavingsOutlinedIcon className='xq'/> <span className='spanfor-icon'>More Saving</span></div></Button> 
  <Button  className='pg1-c'>  <div  className='pg1-c'><WatchLaterOutlinedIcon className='xq'/> <span className='spanfor-icon'>24/7 Online Support</span></div></Button> 
  </div>
  
 </>
  )
}

export default Productgrid1