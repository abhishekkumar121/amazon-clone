export const initialState ={
    basket: [],
};
//Selecter
export const getBasketTotal = (basket) => 
    basket.reduce((amount, items) => items.price + amount, 0);

const reducer=(state,action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                basket:[...state.basket,action.items],
            };
        case "REMOVE_FROM_BASKET" :
            // return{
            //     ...state,basket:state.basket.filter(items => items.id !== action.id)
            // } 
            const index =state.basket.findIndex(
                (basketItem) =>basketItem.id === action.id
            );
            let newBasket=[...state.basket] ;
            if(index>=0){
               newBasket.splice(index,1);

            }else{
                console.warn(
                    `cant remove product(id: ${action.id} as its not in basket!)`
                )
            } 
            return {
                ...state,basket:newBasket
            }
        default:
            return state;    
    }
};

export default reducer;