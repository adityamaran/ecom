import React from 'react'
import './slider.css';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Slide from './Slide'
import { Button } from '@mui/material';

function Slider() {
   


    let box = document.querySelector(".slider-container");
const leftClick = () =>{
var width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);


}
const rightClick = () =>{
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);

 

}

  return (
    <>

        
<span className='left-slide-btn'><Button><ArrowCircleLeftIcon className='slid-btn-size'  onClick={leftClick}></ArrowCircleLeftIcon></Button></span>
<span  className='right-slide-btn'><Button><ArrowCircleRightIcon onClick={rightClick}></ArrowCircleRightIcon></Button></span>
    <div className='slider-container'>

<Slide/>
<Slide/>

    </div>

   
    
    </>
  )
}

export default Slider