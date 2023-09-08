import React, { useState } from 'react'
import axios from 'axios'
import './auth.css'
// import {Ac} from '@mui/icons-material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Link } from 'react-router-dom';
function Register() {
  const [loading,setLoading] = useState(false);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    console.log(name,email,password);


    const register = async (e)=>{
      
    
        //  e.preventDefault();
         setLoading(true);
     try{
      console.log(name,email,password);

      if(email===""|| password===""||name===''){
        // setLoading(false)
        // setError("Required Field is Missing...") 
        alert('Required Field is Missing...')
        // console.log(error);    

      }else{
      const ress =   await fetch('http://localhost:3002/register/api',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          email:email,
          name:name,
          password:password
        }),
      })
      const data = await ress.json();
      console.log(data);
      alert(`New Account Created`)
      window.location.href='/login'
      setLoading(false);
        
      }
     


     }
     catch(err){
      console.log(err);
     }
    }


  return (
    <div className='auth-container'>
     
    <div 
    className='auth-container2'>
     <h2><span><AccountCircleIcon className='pro-icon'/></span><br></br>Register</h2>
    
    <form>
        <input type='text' placeholder='username...' value={name} onChange={(e)=>setName(e.target.value)}></input>
        <br>
        </br>
        <input type='email' placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}></input>
        <br/>

        <input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}>

        </input>
        <br/>
        <button type='submit' className='auth-btn' onClick={()=>{register()}} >{loading? "Loading...":"Register"}</button>
   
        </form>
        <span>Already Have Account? <Link to={'/login'}><span>Login here</span></Link></span>
        </div>
        </div>
  )
}

export default Register