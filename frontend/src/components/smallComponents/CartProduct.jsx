import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"

const CartProduct = ({ productId, productTitle, productValue, productCategory, productQuantity }) => {

    const [icon, setIcon] = useState("");

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

    const handleRemoveFromCart = (id) => {

        try {
            axios.delete(`/cart/${id}`);
        } catch (error) {
            console.error("Error removing item from cart:", error);
        }
    };

    return (
        <div className='w-full h-auto flex flex-col border-gray-300  border-2 rounded-lg'>
            <div className='flex flex-row gap-2 '>
                <div className='material-symbols-outlined bg-orange-600 text-6xl! bg-none text-white rounded-lg p-1 flex justify-center items-center'>{icon}</div>
                <div className='flex flex-row w-full h-auto bg-white justify-around items-center'>
                    <h4 className='font-semibold text-lg! '>{productTitle}</h4>
                    <p className='text-lg font-bold text-[var(--color-main)]'>${productValue}</p>
                </div>
            </div>
           

            <div className='flex flex-row justify-between items-center p-2 my-4'>
                <div className='w-full h-auto flex'>
                    <button className='w-20 h-auto flex justify-center items-center text-orange-600 bg-white cursor-pointer '>
                        <span className='material-symbols-outlined'>add</span>
                    </button>
                    <span className='mx-2 font-medium'>{productQuantity || 1}</span>
                    <button className='w-20 h-auto flex justify-center items-center text-orange-600 bg-white cursor-pointer '>
                        <span className='material-symbols-outlined'>remove</span>
                    </button>
                </div>
                <button onClick={() => handleRemoveFromCart(productId)}
                className='w-20 h-auto flex justify-center items-center text-orange-600 bg-white cursor-pointer '>
                <span className='material-symbols-outlined'>delete</span>
            </button>
            </div>




        </div>
    )
}

export default CartProduct
