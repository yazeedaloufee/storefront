export const filter = (category)=>{
    return {
        type: 'FILTER' ,
        payload: category}
}
export const all = ()=>{
    return{type:'All'}
}
export const addToCart=(category)=>{
    return {type:'ADDTOCART',
            payload:category}
}