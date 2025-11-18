import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import ProductItem from '../components/smallComponents/ProductItem';
import { useCart } from '../hooks/useCart.js';

const ProductPage = () => {

    const { addProductToCart } = useCart

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [myProductId, setMyProductId] = useState(null);

    const location = useLocation();
    const { productTitle, productPrice, icon, grade, soldQuantity, productDescription, productId } = location.state || {};

    const fetchProducts = async () => {
        try {
            const response = await axios.get('/products');
        
            const shuffled = response.data.sort(() => Math.random() - 0.5);
            setProducts(shuffled.slice(0, 3));
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {

        window.scrollTo(0, 0);
        fetchProducts();
        getProductById(productId);
    }, [productId]);

    const getProductById = (id) => {
        return setMyProductId(id);
    }

    const handleAddToCart = async (e) => {
        e.stopPropagation();
        addProductToCart(productId);
    };

    return (
        <main className=" min-h-screen w-full p-0 m-0 overflow-x-hidden overflow-y-auto">
            <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <div className='min-h-screen w-full flex flex-col lg:flex-row p-8 md:p-16 bg-white gap-8 justify-between items-start '>
                <div className='w-full h-auto flex flex-col gap-2 md:max-w-[70%]  '>
                    <div className='w-full h-auto flex justify-center items-center p-4 border-2 border-gray-200 bg-orange-600 rounded-xl shadow-md xl:w-[80%] xl:self-center xl:h-60'>
                        <span className='material-symbols-outlined text-white text-9xl! hover:scale-115 transition-transform duration-300'>{icon}</span>
                    </div>
                    <div className='w-full h-auto flex flex-col gap-2 mt-4 mb-8 '>
                        <h2 className='text-2xl lg:text-3xl font-semibold'>{productTitle}</h2>
                        <p className='text-3xl lg:text-4xl font-bold text-[var(--color-main)]'>$ {productPrice}</p>
                        <div className="text-sm text-gray-500 font-normal flex flex-row items-center justify-start gap-1 text-center w-full">
                            <div className='flex flex-row justify-center items-center gap-1 p-1'>
                                <span className='material-symbols-outlined text-yellow-600'>star</span>
                                <p>{grade}</p>
                            </div>
                            <span>•</span>
                            <p>{`${soldQuantity} Sold`}</p>
                        </div>
                    </div>
                    <div className='w-full h-auto flex justify-center items-center mb-12'>
                        <button onClick={(e) => handleAddToCart(e)}
                         className='w-full rounded-md bg-[var(--color-main)] text-white flex flex-row justify-center items-center p-3 gap-1 cursor-pointer hover:bg-[var(--color-main-light)] transition-all duration-300 hover:translate-y-[-2px] lg:w-[40%] xl:w-[30%]'>
                            <span className='material-symbols-outlined'>add_shopping_cart</span>
                            <p>Add to Cart</p>
                        </button>
                    </div>
                    <div className='w-full h-auto flex flex-col justify-center items-center gap-8 mt-2 mb-12 '>
                        <h3 className='self-start text-2xl font-semibold'>Product Description</h3>
                        <p className='font-medium '>{productDescription}</p>
                    </div>


                </div>
                <div className='h-auto w-full p-4 gap-4 my-8 flex flex-col  '>
                    <h3 className='self-start lg:self-center text-2xl font-semibold mb-8 lg:text-3xl '>Other Products</h3>
                    <div className='w-full h-auto flex flex-col justify-center items-center flex-wrap gap-4  '>
                        {products.map((product) => product.id !== myProductId && (
                        <ProductItem
                            key={product.id}
                            productTitle={product.title}
                            productPrice={product.price}
                            productCategory={product.category}
                            productId={product.id}
                            productDescription={product.description}
                        />
                    ))}
                    </div>
                    

                </div>

            </div>


            <Footer />
        </main>
    );
};

export default ProductPage;