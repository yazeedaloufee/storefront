import { connect } from "react-redux";
import React from 'react';
import { addToCart } from "../store2/actions";

const CartCount = (props)=>{
    return (
        <React.Fragment>
            <p>count({`${props.count?props.count.length:{}}`})</p>
            {console.log(props)}
        </React.Fragment>
        
    )
}
let mapStateToProps=state=>({count:state.cartReducer})
let mapDispatchToProps={addToCart}
export default connect(mapStateToProps,mapDispatchToProps)(CartCount)