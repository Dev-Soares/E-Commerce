import axios from "axios";
import { createContext, useContext, useState, useEffect, use } from "react";
import { useAlert } from "./AlertContext";

const cartContext = createContext();

export const CartProvider = ({ children }) => {

    const { successAlert, errorAlert } = useAlert();

    const [cartNumber, setCartNumber] = useState(0);

    const [cartItems, setCartItems] = useState([]);


    const fetchCartTotalItems = async () => {
        try {
            const response = await axios.get("/cart/total");
            setCartNumber(response.data.totalItems);
            return response.data.totalItems;
        } catch (error) {
            console.error("Error fetching cart total items:", error);
            return 0;
        }
    };

    const fetchCartItems = async () => {

        try {
            const response = await axios.get("/cart");
            setCartItems([...response.data]);
        } catch (error) {
            console.error("Error fetching cart items:", error);
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

    const handleRemoveFromCart = async (id) => {

        try {
            await axios.delete(`/cart/${id}`);
            successAlert("Product removed from cart successfully!");
            researchCartItems();
        } catch (error) {
            console.error("Error removing item from cart:", error);
            errorAlert("Failed to remove product from cart.");
        }
    };

    const handleAddQuantity = async (id, productQuantity, setQuantity) => {

        try {
            await axios.put(`/cart/quantity/${id}`, { quantity: productQuantity + 1 });
            setQuantity(productQuantity + 1);
            researchCartItems();
        } catch (error) {
            console.error("Error adding quantity:", error);
        }

    };

    const handleRemoveQuantity = async (id, productQuantity, setQuantity) => {

        if (productQuantity <= 1) {
            return handleRemoveFromCart(id);
        };

        try {
            await axios.put(`/cart/quantity/${id}`, { quantity: productQuantity - 1 });
            setQuantity(productQuantity - 1);
            researchCartItems();
        } catch (error) {
            console.error("Error removing quantity:", error);
        }
    };


    const researchCartItems = async () => {
        fetchCartItems();
        fetchCartTotalItems();
    };

    useEffect(() => {
        researchCartItems();
    }, []);

    const contextValue = {
        fetchCartTotalItems,
        fetchCartItems,
        addProductToCart,
        handleRemoveFromCart,
        handleAddQuantity,
        handleRemoveQuantity,
        cartNumber,
        cartItems,

    };

    return (
        <cartContext.Provider value={contextValue}>
            {children}
        </cartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(cartContext);
}