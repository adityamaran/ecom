import React from 'react'
import './footer.css'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-sub-container'>
            <div className=' footer-section footer-section-1'>

             <h3>Contact</h3>
             <h5>+91 91X7X92X970</h5>
             <h5>support@demo.com</h5>
         <div className='sharing-icon-container'>
         <InstagramIcon/>
           <WhatsAppIcon/> <YouTubeIcon/> <TwitterIcon/>

         </div>
            </div>

            <div className=' footer-section footer-section-2'>
                <h3> Account</h3>
                <h5>
                    Career 
                </h5>
                <h5>
                    About us 
                </h5>
                
                </div>

                <div className=' footer-section footer-section-3'>
               <h3> Help</h3>
               <h5>
                  FAQ 
                </h5>  <h5>
                   Shipping
                </h5>  <h5>
                   Return
                </h5>
                <h5>
                    Order Status
                </h5>
                </div>

                <div className=' footer-section footer-section-4'>
               <h3> NEWSLETTER</h3>
               <h5>Subscribe to the weekly newsletter for all the latest updates</h5>
               <input type={'email'}  className='newslater-input' placeholder='subscribe us'></input><span className='news-later-icon'><MailOutlineOutlinedIcon/></span>
                </div>
        </div>

        <h4 className='madi-in-class'>@copyright reserverd by Aditya Maran </h4>
    </div>
  )
}

export default Footer