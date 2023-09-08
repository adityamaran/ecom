import React from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Button } from '@mui/material';
import './slider.css'


function Slide(props) {

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
           
<span className='left-slide-btn' onClick={leftClick}><Button><ArrowCircleLeftIcon className='slid-btn-size'  ></ArrowCircleLeftIcon></Button></span>
<span  className='right-slide-btn' onClick={rightClick}><Button><ArrowCircleRightIcon ></ArrowCircleRightIcon></Button></span>
    <div className='slide-container slider-container'>



<img src='https://th.bing.com/th/id/R.cec1a89df85b927d3017a215ba33ca94?rik=SD%2bSJXN13K0B4A&riu=http%3a%2f%2fwww.tommybahama.com%2fcontent%2fexperience-fragments%2ftommy_bahama%2fwomen%2f2019_summer_d4%2f20190723_women%2f_jcr_content%2froot%2fimage_895308100.coreimg.100.1600.jpeg%2f1564013362772%2f2019-05-0445-ecd-summer-d4-womens-6.jpeg&ehk=53gOEZBjgNVBNdFtLw2S8%2be%2fJpy%2f9WzxxEhi8Iw9hFQ%3d&risl=&pid=ImgRaw&r=0'></img>
  
    
  </div>

<div className='slide-container'>

<img src='https://i.pinimg.com/originals/ea/5b/3c/ea5b3c3e110a03cb8dc5a6aef7589d1b.jpg'></img>
  
    
  </div>
     <div className='slide-container'>
<img src='https://97b6ebf9dda910a3f451-a3d6d419bbc0d175dc8d15670509102e.ssl.cf3.rackcdn.com/Max/MX2/Women/EG_MX_Women_Banner08OCT8.jpg'></img>
  
    
  </div>
  

  <div className='slide-container'>
<img src='https://www.freepik.com/free-vector/online-shopping-store-with-mobile-shopping-cart-mail-clouds-realistic-style-vector-illustration_21869807.htm#query=meesho&position=11&from_view=search&track=sph'></img>
  
    
  </div>

  <div className='slide-container'>
<img src='https://www.freepik.com/free-vector/online-shopping-banner-with-3d-shopping-cart-clouds-social-icons-vector-illustration_21869716.htm'></img>
  
    
  </div>
   </>
  )
}

export default Slide





