

const Product = ({imgUrl, productTitle}) => {


  return (
    <div className='w-[100%] h-105 bg-white   rounded-md flex justify-center items-center flex-col gap-3 p-2'>
        <div className='w-full h-full max-h-55'>
            <img src={imgUrl} alt="" className="rounded-md"/>
        </div>
        <div className="flex flex-col justify-start items-start w-full px-4 gap-2">
            <h2 className="text-xl font-item">{productTitle}</h2>
            <h2 className="text-2xl text-[var(--color-main)] font-title">R$3600,00</h2>
            <div className="mt-1 w-full flex justify-between items-center">
                <button className="bg-[var(--color-main)] p-2 rounded-md flex justify-center items-center w-[25%]">
                    <img src="public/cart.png" alt="" className="w-[90%]"/>
                </button>
                <button className=" flex p-2 bg-transparent justify-center items-center w-[30%]">
                    <img src="public/heart.png" alt="" />
                </button>
            </div>
        </div>
        
      
    </div>
  )
}

export default Product
