

const Product = ({imgUrl, productTitle, productPrice}) => {


  return (
    <div className='w-[47%] h-95 md:h-120 lg:h-125 xl:h-138 2xl:h-130 md:w-[30%] xl:w-[23%] 2xl:w-[20%] bg-white rounded-xl flex gap-4 flex-col justify-between items-center p-1'>
        <div className='w-full h-full max-h-45 md:max-h-60 lg:max-h-68 xl:max-h-100 2xl:max-h-70 flex justify-center'>
            <img src={imgUrl} alt="" className="rounded-md h-full w-full"/>
        </div>
        <div className=" flex flex-col justify-start items-start w-full px-4 gap-2 lg:gap-4">
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-item w-full line-clamp-2 ">{productTitle}</h2>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl text-[var(--color-main)] font-title">R${productPrice}</h2>
        </div>
        <div className="mt-1 lg:mb-2 w-full flex justify-around items-center">
                <button className="bg-[var(--color-main)] p-2 rounded-md flex justify-center items-center w-[25%] lg:w-[20%] xl:w-[15%] 2xl:w-[15%]">
                    <img src="public/cart.png" alt="" className="w-[90%]"/>
                </button>
                <button className=" flex p-2 bg-transparent justify-center items-center w-[30%] lg:w-[20%] xl:w-[15%] 2xl:w-[15%]" >
                    <img src="public/heart.png" alt="" />
                </button>
        </div>

        
      
    </div>
  )
}

export default Product
