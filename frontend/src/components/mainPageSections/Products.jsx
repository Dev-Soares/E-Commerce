import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductItem from '../smallComponents/ProductItem.jsx'
import SelectCategory from '../smallComponents/SelectCategory.jsx'


const Products = () => {

  const [products, setProducts] = useState([]);

  const [ pageShown, setPageShown ] = useState(1);

  const [ numberOfPages, setNumberOfPages ] = useState([]);

  const [ category, setCategory ] = useState("All Categories");

  const fetchProductsByPage = async (page) => {
    try {
      const response = await axios.get(`/products?page=${page}&limit=4`);
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
      fetchProductsByPage(1);
    } else {
      fetchProductsByCategory(category);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  useEffect(() => {
    fetchNumberOfPages();
  }, []);

  const fetchNumberOfPages = async () => {

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

  const handlePageChange = (newPage) => {
    setPageShown(newPage);
    setCategory("All Categories"); //gambiarra que tem que ser resolvida depois
    fetchProductsByPage(newPage);
  }

  return (
    <section id='products' className="min-h-screen w-full flex flex-col p-4 md:p-12 bg-white">
        <div className="flex flex-col p-3 mb-8 md:mb-14 gap-1">
            <h2 className="font-bold text-black text-3xl md:text-4xl xl:text-5xl">Today Offers </h2>
            <p className="text-gray-400 text-lg md:text-xl xl:text-2xl mt-1 lg:mt-3">Take advantage of amazing discounts!</p>
            <SelectCategory selectedCategory={category} setSelectedCategory={setCategory} />
        </div>
        
        <div className="flex justify-center items-center gap-4 md:gap-16 flex-wrap ">
          { products.map((product) => {
            return (
              <ProductItem 
                key={product.id}
                productTitle={product.title} 
                productPrice={product.price} 
                productCategory={product.category} 
                productId={product.id}
                productDescription={product.description}
              />
            )
          })}
          
        </div>
        <div className='flex flex-row gap-4 self-center my-16'>
            { numberOfPages.map((page) => {
              return (
                <button className={` p-2 px-3 font-bold border-2 border-[var(--color-main-light)] text-lg rounded-lg text-[var(--color-main)] bg-white hover:bg-[var(--color-main-light)] transition-all duration-600 cursor-pointer hover:translate-y-[-2px] ${pageShown === page ? 'border-[var(--color-main)]! bg-[var(--color-main)]! text-white!' : '' }`}
                key={page}
                 onClick={() => handlePageChange(page)}>
                  {page}
                </button>
              )
            })}
          </div>

    </section>
  )
}

export default Products
