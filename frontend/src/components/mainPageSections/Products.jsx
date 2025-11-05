import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductItem from '../smallComponents/ProductItem.jsx'

const Products = () => {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/products');
      
      setProducts([...response.data]);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section id='products' className="min-h-screen w-full flex flex-col p-4 md:p-12 bg-white">
        <div className="flex flex-col p-3 mb-8 md:mb-14 gap-1">
            <h2 className="font-bold text-black text-3xl md:text-4xl xl:text-5xl">Today Offers </h2>
            <p className="text-gray-400 text-lg md:text-xl xl:text-2xl lg:mt-3">Take advantage of amazing discounts!</p>
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

    </section>
  )
}

export default Products
