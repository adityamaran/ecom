import React from 'react'
import './buyerdetail.css'
import Footer from '../Common/Footer'
import Header from '../Common/Header'

function Buyerdetail() {
  return (
    <>
    <Header/>
    <div className='buyer-detail-container'>
    <div className='buyerdetail-form-container'>
        <h1>Shipping Details</h1>
        <form>
            <label className='buyform-label'>Full  Name </label>
            <br></br>

            <input className='buyform-input' type={'text'}></input>
            <br></br>

{/* 
            <label className='buyform-label'>Last Name </label>
            <br></br> */}
            {/* <input className='buyform-input' type={'text'}></input> */}
            {/* <br></br> */}
            <label className='buyform-label'> Email</label>
            <br></br>

            <input className='buyform-input' type={'text'}></input>
            <br></br>

            <label className='buyform-label'>contact number </label>
            <br></br>
            <input t className='buyform-input'ype={'number'}></input>
            <br></br>


            <label className='buyform-label'>state </label>
            <br></br>
            <input className='buyform-input' type={'text'}></input>
            <br></br>


            <label className='buyform-label'>city </label>
            <br></br>
            <input className='buyform-input' type={'text'}></input>

            <br></br>


            <label className='buyform-label'>Pincode </label>
            <br></br>
            <input t className='buyform-input'ype={'number'}></input>
            <br></br>


            <label className='buyform-label'>Address </label>
            <br></br>
            <input className='buyform-input' type={'text'}></input>

            <br></br>

            <button type='submit'>Continue </button>
        </form>

       
        </div>
        </div>
        
        <Footer/></>
  )
}

export default Buyerdetail