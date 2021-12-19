import React from 'react';
import {Select} from '@mui/material';
import { connect } from 'react-redux';
import { MenuItem,InputLabel ,FormControl} from '@mui/material';
import { filter,all } from '../store2/actions';
const Categories = (props)=>{

return(
    <FormControl fullWidth >

  <InputLabel id="demo-simple-select-label">Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    // id="demo-simple-select"
    // value={}
    // label="Age"
    // onChange={props.filter(this.target.value)}
    onChange= {(e)=>{
      e.preventDefault();
      console.log(e)
      props.filter(e.target.value)
    }}
  >
    {props.categories.map(value=>{
      return(<MenuItem value = {`${value}`} key = {value}>{`${value}` }</MenuItem>)
    })}
    {/* {console.log(props,'porooooooooops')} */}
{/* 
    <MenuItem value={'0'}>All</MenuItem>
    <MenuItem value={'TVs'}>TVs</MenuItem>
    <MenuItem value={'computers'}>computers</MenuItem>
    <MenuItem value={'tablets'}>tablets</MenuItem> */}
  </Select>
 </FormControl>

)}
const handleChange =(e)=>{
  e.preventDefault();
  console.log()
  filter(e.target.value);
}
const mapStateToProps= (state)=>({categories:state.category.categories});


const mapDispatchToProps = {filter,all}
export default connect(mapStateToProps,mapDispatchToProps)(Categories) ;