import axios from 'axios';
import { useState, useEffect, use } from 'react';

export const useProducts = () => {

  const [products, setProducts] = useState([]);
  const [pageShown, setPageShown] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState([]);
  const [category, setCategory] = useState("All Categories");

  const fetchProductsByPage = async () => {
    try {
      const response = await axios.get(`/products?page=${pageShown}&limit=4`);
      setProducts([...response.data]);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProductsByCategory = async (category) => {

    const formatedCategory = category.toLowerCase();
    try {
      const response = await axios.get(`/products/category/${formatedCategory}?page=${pageShown}&limit=4`);
      setProducts([...response.data]);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProducts = () => {
    if (category === "All Categories") {
      fetchProductsByPage();
    } else {
      fetchProductsByCategory(category);
    }
  };

  const fetchNumberOfPages = async () => {
    if (category === "All Categories") {
      fetchNumberOfPagesGeneral();
    } else {
      fetchNumberOfPagesByCategory(category);
    }
  };

  const fetchNumberOfPagesByCategory = async (category) => {
    const formatedCategory = category.toLowerCase();
    try {
      const response = await axios.get(`/products/category/${formatedCategory}/pages`); 
      const totalPages = response.data;
      setNumberOfPages(getArrayNumberOfPages(totalPages));
      return totalPages;
    } catch (error) {
      console.error("Error fetching number of pages by category:", error);
    }
  };

  const fetchNumberOfPagesGeneral = async () => {
    try {
      const response = await axios.get('/products/pages');
      const totalPages = response.data;
      setNumberOfPages(getArrayNumberOfPages(totalPages));
      return totalPages;
    } catch (error) {
      console.error("Error fetching number of pages:", error);
    }

  };

  const getArrayNumberOfPages = (pagesTotal) => {
    const pagesArray = [];
    while (pagesTotal > 0) {
       pagesArray.unshift(pagesTotal);
       pagesTotal--;
    }
    return pagesArray;
  }

   useEffect(() => {
    fetchProducts();
  }, [pageShown]);

  useEffect(() => {
    fetchProducts();
    fetchNumberOfPages();
    setPageShown(1);
  }, [category]);

  return {
    products,
    setProducts,
    pageShown,
    setPageShown,
    numberOfPages,
    setNumberOfPages,
    category,
    setCategory
  }

};