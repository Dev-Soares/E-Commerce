import { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "../contexts/AlertContext";
import { useDispatch } from "react-redux";
import {
  fetchCartTotalItems,
  fetchCartTotalPrice,
} from "../state/cart/cartSlice";

export const useCart = () => {

  const dispatch = useDispatch();

  const { successAlert, errorAlert } = useAlert();

  const [pageShown, setPageShown] = useState(1);

  const [cartItems, setCartItems] = useState([]);

  const [numberOfPages, setNumberOfPages] = useState([]);

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
      await axios.put(`/cart/quantity/${id}`, {
        quantity: productQuantity + 1,
      });
      setProductQuantity(productQuantity + 1);
      dispatch(fetchCartTotalPrice());
    } catch (error) {
      console.error("Error adding quantity:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRemoveQuantity = async (
    id,
    productQuantity,
    setProductQuantity
  ) => {
    if (isProcessing) return;
    setIsProcessing(true);

    if (productQuantity <= 1) {
      return handleRemoveFromCart(id);
    }

    try {
      await axios.put(`/cart/quantity/${id}`, {
        quantity: productQuantity - 1,
      });
      setProductQuantity(productQuantity - 1);
      dispatch(fetchCartTotalPrice());
    } catch (error) {
      console.error("Error removing quantity:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRemoveFromCart = async (id) => {
    try {
      await axios.delete(`/cart/${id}`);
      refreshCartItems();
      dispatch(fetchCartTotalItems());
      dispatch(fetchCartTotalPrice());
      successAlert("Product removed from cart successfully!");
    } catch (error) {
      console.error("Error removing item from cart:", error);
      errorAlert("Failed to remove product from cart.");
    }
  };

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`/cart?page=${pageShown}&limit=3`);
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const getNumberOfPages = async () => {
    let pages = await getCartPages();
    const pagesArray = [];

    while (pages > 0) {
      pagesArray.unshift(pages);
      pages--;
    }
    return setNumberOfPages(pagesArray);
  };

  const getCartPages = async () => {
    try {
      const response = await axios.get("/cart/pages");
      return response.data.numberOfPages;
    } catch (error) {
      console.error("Error fetching cart pages:", error);
    }
  };

  const refreshCartItems = async () => {
    await fetchCartItems();
    await getNumberOfPages();
  };

  useEffect(() => {
    refreshCartItems();
  }, [pageShown]);

  return {
    cartItems,
    setCartItems,
    pageShown,
    setPageShown,
    numberOfPages,
    setNumberOfPages,
    fetchCartItems,
    getNumberOfPages,
    refreshCartItems,
    handleRemoveFromCart,
    addProductToCart,
    handleAddQuantity,
    handleRemoveQuantity,
  };
};
