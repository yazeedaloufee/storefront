'use strict';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CartCount from './cart'
const Header = () => {

    return (
        <div className='Header'>
            <div className='site-Name'>

                <h1>Electronics store</h1>
                <p>some text </p>
            </div>
           <div>
              <ul>
                <li>Home</li>
                <li>Search</li>
                <li>About us</li>  
                  </ul> 
               </div> 
              <CartCount></CartCount> 
        </div>
    )
}
export default Header;