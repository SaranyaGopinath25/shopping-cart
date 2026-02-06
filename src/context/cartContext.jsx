import { allProducts } from "../assets/data";
import { createContext, useContext, useState } from "react";
import { getParsedItemFromLocalStorage } from "../utilities/localStorageFns";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [allItems, setAllItems] = useState([]);

    const setItems = () => {
        const cartItems = getParsedItemFromLocalStorage("cartItems");
            console.log("Cart items from local storage :::: "+cartItems); 
            cartItems.map((cartItem) => {
                const product = allProducts.find((product) => product.id === cartItem.id);
                if(product){
                    product.inCart = cartItem.inCart;
                    product.quantity = cartItem.quantity;
                }
            })
        setAllItems(allProducts);
    }

    const addToCart = (item) => {
        setAllItems((prevItems) => {
            return prevItems.map((prevItem) => {
                if(prevItem.inCart){
                    return prevItem;
                }
                return prevItem.id === item.id ? {...prevItem, inCart : true} : prevItem
            })
        })
    }

    const removeFromCart = (item) => {
        setAllItems((prevItems) => {
            return prevItems.map((prevItem) => {
                return prevItem.id === item.id ? {...prevItem, inCart : false, quantity : 1} : prevItem;
            })
        })
    }

    const updateQuantity = (cartItem, amount) => {
        setAllItems((prevItems) => {
            return prevItems.map((item) => {
                return item.id === cartItem.id ? {...item, quantity : item.quantity + amount} : item
            })
        })
    }

    return (
        <CartContext.Provider value={{allItems, setItems, addToCart, removeFromCart, updateQuantity}}>
            {children}
        </CartContext.Provider>
    );
}


export const useCart = () => {
    return useContext(CartContext);
}
