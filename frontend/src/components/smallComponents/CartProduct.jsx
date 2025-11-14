import React from 'react'
import { useEffect, useState } from "react"

const CartProduct = ({ productId, productTitle, productPrice, productCategory, productQuantity, handleAddQuantity, handleRemoveQuantity, handleRemoveFromCart }) => {

    const [icon, setIcon] = useState("");
    const [quantity, setQuantity] = useState(productQuantity);

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

    useEffect(() => {
        setQuantity(productQuantity);
    }, [productQuantity]);




    return (
        <div className=' hover:translate-y-[-3px] transition-all duration-400 w-full h-auto flex flex-row bg-white shadow-lg  rounded-lg p-2 py-4 md:max-w-[70%] justify-start items-center gap-4 '>
            <div className='flex justify-start items-center max-w-[50%] h-full'>
                <span className='material-symbols-outlined bg-orange-600 text-6xl! bg-none text-white rounded-lg p-1 flex justify-center items-center ml-3 mt-'>{icon}</span>
            </div>
            <div className='flex flex-col h-full w-full justify-between items-center gap-3 '>
                <div className='flex flex-row gap-6 justify-center items-center w-full'>
                    <h3 className='text-xl font-semibold text-center max-w-[50%]'>{productTitle}</h3>
                    <p className='text-xl! font-bold text-[var(--color-main)] mt-1 text-center flex justify-center items-center'>$ {productPrice}</p>
                </div>
                <div className='flex flex-row gap-10 justify-center items-center mt-2'>
                    <div className='flex flex-row gap-3 justify-center items-center'>
                        <button onClick={() => handleRemoveQuantity(productId, quantity, setQuantity)} className='bg-gray-200 text-gray-700 rounded-md p-1 hover:bg-gray-300 transition-all duration-300 material-symbols-outlined cursor-pointer'>remove</button>
                        <p className='text-lg font-medium'>{quantity}</p>
                        <button onClick={() => handleAddQuantity(productId, quantity, setQuantity)} className='bg-gray-200 text-gray-700 rounded-md p-1 hover:bg-gray-300 transition-all duration-300 material-symbols-outlined cursor-pointer'>add</button>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button onClick={() => handleRemoveFromCart(productId)} className='bg-red-600 text-white rounded-md p-1 hover:bg-red-700 transition-all duration-300 material-symbols-outlined cursor-pointer'>delete</button>
                    </div>


                </div>

            </div>







        </div>
    )
}

export default CartProduct
