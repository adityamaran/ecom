

import React from 'react' 
import './category.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';

function Category() {
  return (
<div className='options-container'>

   <div className='optionCategory'>
   <div className='option-category'>

<> <h3 className='dropdown-btnp'> CATEGORYS </h3></><><ArrowDropDownIcon className='dropdown-btn'/></>

<div className='dropdownctegory'>
    <h3>T-Shirts</h3>
  <h3>Jeans</h3>
    <h3>shoes</h3>
    <h3>Watches</h3>
    <h3>Winter Wear</h3>

</div>

   

 </div>
   </div>
    <div className='option-men option-hover'>
   <Link to={'/product-filter-male'}><h3 className='black-font'>Man</h3></Link>

        
        </div>
        <div className='option-Womens option-hover'>
      <Link to={'/product-filter-female'}>  <h3 className='black-font'>WOMENS</h3></Link>

        
        </div>
        <div className='option-Kids option-hover'>
        <h3>KIDS</h3>

        
        </div>

</div>  
)
}

export default Category