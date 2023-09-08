import './App.css';
import Addtokart from './Components/Addtokart';
import Buyerdetail from './Components/Buyerdetail';
import Buypage from './Components/Buypage';
import Home from './Components/Home';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './Common/product';
import Python from './Common/Python';
import Register from './Components/auth/register';
import Login from './Components/auth/login';
import { useState } from 'react';
import {Provider} from 'react-redux' 
import store from './store/store';
import Filterproduct from './Common/filterproduct';
import Filterproduct2 from './Common/filterproduct2';
import Dashboard from './Components/dashboard';

function App() {

  // const [cartItem,setCartItem] = useState([]);

  
  return (
    // <Register/>
    // <Login/>
    <div className="App">
      <Provider store={store}>
    {/* <Home/> */}
    {/* <Buypage/> */}
    {/* <Buyerdetail/> */}
    {/* <Addtokart/> */}

<BrowserRouter>
{/* <Products/> */}

<Routes >

<Route path='/' element={<Login/>}></Route>
<Route path='/register' element={<Register/>}/>
<Route path='/user-info' element={<Dashboard/>}></Route>
  <Route path='/home' element={<Home/>}/>
<Route path='/addtokart/product' element={<Addtokart />}/>
<Route path='/buy/product' element={<Buypage />}></Route>
<Route path='/user-details' element={<Buyerdetail/>}></Route>
<Route path='product/page/:id' element={<Buypage/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='product-filter-male/Product/page/:id' element={<Buypage/>}></Route>
<Route path='/product-filter-male' element={<Filterproduct/>}></Route>
<Route path='/product-filter-female' element={<Filterproduct2/>}></Route>
<Route path='product-filter-female/Product/page/:id' element={<Buypage/>}></Route>

</Routes>


</BrowserRouter>

   
</Provider> </div>
  );
}

export default App;


// <Header/>
// <Category/>
// {/* <Slide/> */}
// <Banner/>

// <Products/>
// <Banner2/>
// <Productgrid1/>
// <Productgrid/>
// <Products/>
// <Footer/>
