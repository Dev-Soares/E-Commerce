import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useAlert } from "./AlertContext";
import { fetchCartTotalItems, fetchCartTotalPrice } from "../state/cart/cartSlice.js";
import { useDispatch } from "react-redux";

const cartContext = createContext();

export const CartProvider = ({ children }) => {

    const dispatch = useDispatch();

    const { successAlert, errorAlert } = useAlert();

    const [isProcessing, setIsProcessing] = useState(false);

    const addProductToCart = async (productId) => {
        
        try {
            await axios.post(`/cart/${productId}`);
            successAlert("Product added to cart successfully!");
            dispatch(fetchCartTotalItems());
            dispatch(fetchCartTotalPrice());
        } catch (error) {
            console.error("Error adding product to cart:", error);
            errorAlert("Failed to add product to cart.");
        }
    };

    const handleAddQuantity = async (id, productQuantity, setProductQuantity) => {
        if (isProcessing) return;
        setIsProcessing(true);
        try {
            await axios.put(`/cart/quantity/${id}`, { quantity: productQuantity + 1 });
            setProductQuantity(productQuantity + 1);
            dispatch(fetchCartTotalPrice());
        } catch (error) {
            console.error("Error adding quantity:", error);
        } finally {
            setIsProcessing(false);
        }

    };

    const handleRemoveQuantity = async (id, productQuantity, setProductQuantity) => {
        
        if (isProcessing) return;
        setIsProcessing(true);

        if (productQuantity <= 1) {
            return handleRemoveFromCart(id);
        };

        try {
            await axios.put(`/cart/quantity/${id}`, { quantity: productQuantity - 1 });
            setProductQuantity(productQuantity - 1);
            dispatch(fetchCartTotalPrice());
        } catch (error) {
            console.error("Error removing quantity:", error);
        } finally {
            setIsProcessing(false);
        }
    };

    const contextValue = {
        addProductToCart,
        handleAddQuantity,
        handleRemoveQuantity,
        
    };

    return (
        <cartContext.Provider value={contextValue}>
            {children}
        </cartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(cartContext);
}