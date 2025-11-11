import { useState, useEffect } from "react";
import axios from "axios";

export const useCart = () => {

  const [pageShown, setPageShown] = useState(1);

  const [cartItems, setCartItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const [numberOfPages, setNumberOfPages] = useState([]);

  const getTotalPrice = async () => {
    try {
      const response = await axios.get("/cart/total-price");
      setTotalPrice(response.data.totalPrice);
    } catch (error) {
      console.error("Error fetching total price:", error);
    }
  };

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`/cart?page=${pageShown}&limit=3`);
      setCartItems(response.data.cartItems);
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

  useEffect(() => {

    fetchCartItems();
    getTotalPrice();

  }, [pageShown]);

  useEffect(() => {
    getNumberOfPages();
  }, []);

  return {
    cartItems,
    setCartItems,
    totalPrice,
    pageShown,
    setPageShown,
    numberOfPages,
    setNumberOfPages,
    fetchCartItems,
    getTotalPrice,
    getNumberOfPages
  };

};
