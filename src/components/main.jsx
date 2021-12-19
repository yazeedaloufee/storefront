'use strict';
import React, {useState} from 'react';
import Display from './display';
import CartItems from './cartItems'

const Main = ()=>{
    
    return(
        <div>
            <CartItems></CartItems>
         <Display>
             </Display> 
        
        </div>
    )
}
export default Main;