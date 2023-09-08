import React, { useEffect, useState } from 'react'
import './dashboard.css'
import axios from 'axios'
import Header from '../Common/Header';
import Footer from '../Common/Footer';

function Dashboard() {
    const [user,setUser] = useState({});
    useEffect(()=>{
        const get = async()=>{
            await axios.get('http://localhost:3002/user-info').then((doc)=>{
                console.log(doc);
                setUser(doc);
            }).catch((err)=>{
                console.log('Error Found')
                alert(err);
            })


        }
        // get();

    },)
  return (<><Header/>
    <div className='dash-container'>
        <div className='dash-1'>
        <span class="material-symbols-outlined">
account_circle
</span>
<br></br>
{/* <h3>username : {user.name}</h3><br/>
<h3>Email : {user.email}</h3><br/> */}

        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Dashboard