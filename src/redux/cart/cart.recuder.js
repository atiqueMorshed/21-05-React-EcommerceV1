import cartActionTypes from './cart.types';
import {addItemToCart, removeItemFromCart, removeTheWholeItemFromCart} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case cartActionTypes.REMOVE_ITEM: 
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }

        case cartActionTypes.REMOVE_THE_WHOLE_ITEM:
            return {
                ...state,
                cartItems: removeTheWholeItemFromCart(state.cartItems, action.payload)
            }

        case cartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }

        default: 
            return state;
    }
}

export default cartReducer;