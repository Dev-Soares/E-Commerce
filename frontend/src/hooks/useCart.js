import { useState, useEffect } from "react";
import axios from "axios";


export const useCart = () => {

  const [pageShown, setPageShown] = useState(1);

  const [cartItems, setCartItems] = useState([]);

  const [numberOfPages, setNumberOfPages] = useState([]);

  
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
    refreshCartItems
  };

};
