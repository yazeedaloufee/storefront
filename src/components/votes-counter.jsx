import React from 'react';
import {connect} from 'react-redux';
import {increment, reset} from '../store/actions';

const voteCounter =props =>{
return(
    <section>
        <ul>
        {props.counter.candidates.map(person=>
       <li onClick = {()=>props.increment(person.name)} key = {person.name}>{person.name}:{person.votes}</li> 
               )}
        </ul>
        <button onClick = {props.reset}>Reset</button>
        {console.log(props,'proooooooooooops')}
    </section>
)
} 
const mapStateToProps = state=>({
    counter:state.counter,

})

const mapDispatchToProps = {increment,reset};

export default connect (mapStateToProps,mapDispatchToProps)(voteCounter);