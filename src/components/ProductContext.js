import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        console.log(existingItem)
        if (existingItem) {
            setCartItems((prevCartItems) =>
                prevCartItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            const newItem = { ...product, quantity: 1 };
            setCartItems([...cartItems, newItem]);
        }
    };
    const incrementQuantity = (productId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };
    const decreamentQuantity = (productId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };
    return (
        <ProductContext.Provider value={{ addToCart, cartItems, incrementQuantity,decreamentQuantity }}>
            {children}
        </ProductContext.Provider>
    );
};
