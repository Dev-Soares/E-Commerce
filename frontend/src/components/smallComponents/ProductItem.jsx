import {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ProductItem = ({ productTitle, productPrice, productCategory, productId, productDescription }) => {

    const [grade, setGrade] = useState(null)
    const [icon, setIcon] = useState(null)
    const [soldQuantity, setSoldQuantity] = useState(null)

    const generateRandom = ( multiplier, decimals ) => {
        const randomNumber = Math.random() * multiplier;
        return randomNumber.toFixed(decimals);
    }

    const getSoldQuantity = () => {
        const value = generateRandom(1000,0);
        return setSoldQuantity(value);
    } 

    const getGrade = () => {
        const value = generateRandom(5, 1);
        return setGrade(value)
    }

    useEffect(() => {

        getSoldQuantity();
        getGrade();

    }, [])

    useEffect(() => {
        const iconName = getIcon();
        setIcon(iconName);
    }, [productCategory])

    const getIcon = () => {
        switch (productCategory) {
            case 'technology':
                return 'devices';
            case 'sports':
                return 'sports_soccer';
            case 'furniture':
                return 'chair';
            case 'home-appliances':
                return 'kitchen';
            case 'tools':
                return 'construction';
            default:
                return 'more_horiz';
        }
    }

    const navigate = useNavigate();

    const goToProductPage = (e) => { 
        e.stopPropagation();
        navigate('/product-page', {
            state: { productTitle, productPrice, productCategory, icon, grade, soldQuantity, productId, productDescription }
        });
    };

    const handleAddToCart = (e) => {
        e.stopPropagation();
        try {
            axios.post(`/cart/${productId}`);
        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    };

    return (

        <div onClick={(e) => goToProductPage(e)} className=" h-fit flex flex-col rounded-xl shadow-lg border-product bg-gray-100 w-80 cursor-pointer hover:shadow-xl hover:translate-y-[-3px] transition-transform duration-300 max-h-116 ">
            <div className="w-full h-48 bg-gray-100 rounded-t-xl flex justify-center items-center ">
                <span className='material-symbols-outlined text-[var(--color-main)] text-6xl! hover:scale-115 transition-transform duration-300'>{icon}</span>
            </div>
           
            <div className="flex flex-col gap-2 p-5 w-full h-auto ">
                <h3 className="text-2xl font-semibold">{productTitle}</h3>
                <p className="text-3xl font-bold text-[var(--color-main)]">${productPrice}</p>

                <div className="text-sm text-gray-500 font-normal flex flex-row items-center justify-start gap-1 text-center w-full">
                    <div className='flex flex-row justify-center items-center gap-1 p-1'>
                        <span className='material-symbols-outlined text-yellow-600'>star</span>
                        <p>{grade}</p>
                    </div>
                    <span>•</span>
                    <p>{`${soldQuantity} Sold`}</p>
                </div>

            </div>
            <div className="w-full h-auto flex justify-center items-center p-3 text-white font-semibold mb-2">
                <button onClick={(e) => handleAddToCart(e)}
                className="w-[80%] rounded-md bg-[var(--color-main)] flex flex-row justify-center items-center p-3 gap-1 cursor-pointer hover:bg-[var(--color-main-light)] transition-all duration-300 hover:translate-y-[-2px]">
                    <span className='material-symbols-outlined'>add_shopping_cart</span>
                    <p>Add to Cart</p>


                </button>
            </div>
            
        </div>

    )
}

export default ProductItem