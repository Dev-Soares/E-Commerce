import {useState, useEffect } from 'react'


const ProductItem = ({ productTitle, productPrice, productImg }) => {

    const [grade, setGrade] = useState(null)

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

    }, [ProductItem])



    return (

        <div className="w-auto h-fit flex flex-col rounded-xl shadow-lg border-product max-w-80 ">
            
            <img src="/productPicture.jpg" alt="Product Image" className="w-full max-h-50 object-cover object-center" />
            <div className="flex flex-col gap-2 p-5 w-full h-auto ">
                <h3 className="text-2xl font-semibold">{productTitle}</h3>
                <p className="text-3xl font-bold text-[var(--color-main)]">{productPrice}</p>

                <div className="text-sm text-gray-500 font-normal flex flex-row items-center justify-start gap-1 text-center w-full">
                    <div className='flex flex-row justify-center items-center gap-1 p-1'>
                        <span className='material-symbols-outlined text-yellow-600'>star</span>
                        <p>{grade}</p>
                    </div>
                    <span>•</span>
                    <p>{`${soldQuantity} Vendidos`}</p>
                </div>

            </div>
            <div className="w-full h-auto flex justify-center items-center p-3 text-white font-semibold">
                <button className="w-[80%] rounded-md bg-[var(--color-main)] flex flex-row justify-center items-center p-3 gap-1">
                    <span className='material-symbols-outlined'>add_shopping_cart</span>
                    <p>Adicionar ao Carrinho</p>


                </button>
            </div>
            
        </div>

    )
}

export default ProductItem