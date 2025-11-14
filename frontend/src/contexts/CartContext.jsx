import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAlert } from "./AlertContext";
import { useCart } from "../hooks/useCart";

const cartContext = createContext();

export const CartProvider = ({ children }) => {

    const { successAlert, errorAlert } = useAlert();

    const [cartNumber, setCartNumber] = useState(0);

    const [totalPrice, setTotalPrice] = useState(0);

    const [isProcessing, setIsProcessing] = useState(false);

    const getCartTotalPrice = async () => {
        try {
            const response = await axios.get("/cart/total-price");
            setTotalPrice(response.data.totalPrice);
        } catch (error) {
            console.error("Error fetching cart total price:", error);
        }
    };

    const fetchCartTotalItems = async () => {
        try {
            const response = await axios.get("/cart/total");
            setCartNumber(response.data.totalItems);
        } catch (error) {
            console.error("Error fetching cart total items:", error);
        }
    };

    const addProductToCart = async (productId) => {
        
        try {
            await axios.post(`/cart/${productId}`);
            successAlert("Product added to cart successfully!");
            researchCartItems();
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
            researchCartItems();
            setProductQuantity(productQuantity + 1);
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
            researchCartItems();
            setProductQuantity(productQuantity - 1);
        } catch (error) {
            console.error("Error removing quantity:", error);
        } finally {
            setIsProcessing(false);
        }
    };

    const researchCartItems = async () => {
        await fetchCartTotalItems();
        await getCartTotalPrice();
    };

    useEffect(() => {
        researchCartItems();
    }, []);

    const contextValue = {
        fetchCartTotalItems,
        researchCartItems,
        addProductToCart,
        handleAddQuantity,
        handleRemoveQuantity,
        totalPrice,  
        cartNumber,
        
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