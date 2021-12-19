 let cart = [];

 export default (state = cart, action)=>{
     let {type,payload} = action;
     switch (type) {
         case 'ADDTOCART':
            let itemsInCart = state.slice();
            if(itemsInCart.find(foundItem=>foundItem.product===payload)){
                let item = itemsInCart.find(foundItem=>foundItem.product===payload) 
                let count = item.count+1;
                let updatedItem={product:payload,count}
             itemsInCart.splice(itemsInCart.indexOf(item),1,updatedItem)//this adds and item to cart
            return itemsInCart;
            }else{

            let item={product:payload,count:1}
            itemsInCart.splice(itemsInCart.length-1,0,item)//this adds and item to cart
            return itemsInCart;
            }
         
            
         default:
             return state;
     }
 }