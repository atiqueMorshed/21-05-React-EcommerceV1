import React, {useState, useEffect, createContext} from "react";
import { addItemToCart, removeItemFromCart, removeTheWholeItemFromCart } from "./cart.utils";

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    removeWholeItem: () => {},
    cartItemsCount: 0,
    cartTotal: 0
});

const CartProvider = ({children}) => {
    const cartItemsFromStorage = () => JSON.parse(window.localStorage.getItem('cartItems') || [] );
    const [cartItems, setCartItems] = useState( cartItemsFromStorage());
    const [hidden, setHidden] = useState(true);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const toggleHidden = () => setHidden(!hidden);
    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const removeWholeItem = item => setCartItems(removeTheWholeItemFromCart(cartItems, item));
    const getCartItemsCount = cartItems => cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0);
    const getCartTotal = cartItems => cartItems.reduce((accumulator, cartItem) => accumulator + (cartItem.price * cartItem.quantity), 0);

    useEffect(() => {
        setCartItemsCount(getCartItemsCount(cartItems));
        setCartTotal(getCartTotal(cartItems));
        window.localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider value={{
            hidden,
            toggleHidden,
            cartItems,
            addItem,
            removeItem,
            removeWholeItem,
            cartItemsCount,
            cartTotal
        }} >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;