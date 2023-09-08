import axios from 'axios';
import './auth.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Login() {
    const [email,setEmail]=useState('');
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const [password,setPassword] = useState('');
    console.log(email,password);

    const login =async(e)=>{
        e.preventDefault();
        setLoading(true);
        setError('');
    
            if(email ==""|| password==""){
              
                setError("Required Field is Missing...") 
                alert('Required Field is Missing...')
                console.log(error);  
                
                setLoading(false)
            }else{
               
                const res = await fetch('http://localhost:3002/login/api',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify({
                        email:email,
                        password:password,
                          

                    }),

                })
                const data = await res.json()
                console.log(data)
                setLoading(false);
                if(data.udata){
                     window.location.href='/home'
                    // alert('Login successful..')
                    // window.location.href='/home1'
                }
                else{
                    window.location.href='/login' 
                    alert('Incorect email and password')
                }
            }
       
    }

  return (
    <div className='auth-container'>
    <div className='auth-container1'><h2><span><AccountCircleIcon className='pro-icon'/></span><br></br>Log In</h2>
    <form onSubmit={login}>
       
        <input type='email' placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}></input>
        <br>
        </br>
        <input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}></input>
   <br></br>
   <button type='submit' className='auth-btn' >{loading? "Loading...":"Login"}</button>
    </form>
    <span>New User? <Link to={'/register'}><span>Register</span></Link></span>
    </div>
    </div>
  )
}

export default Login