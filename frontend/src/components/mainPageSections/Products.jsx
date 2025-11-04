import ProductItem from '../smallComponents/ProductItem.jsx'

const Products = () => {

  const products = [];


  return (
    <section id='products' className="min-h-screen w-full flex flex-col p-4 md:p-12 bg-white">
        <div className="flex flex-col p-3 mb-8 md:mb-14 gap-1">
            <h2 className="font-bold text-black text-3xl md:text-4xl xl:text-5xl">Today Offers </h2>
            <p className="text-gray-400 text-lg md:text-xl xl:text-2xl lg:mt-3">Take advantage of amazing discounts!</p>
        </div>
        
        <div className="flex justify-center items-center gap-4 md:gap-16 flex-wrap ">
          {/*{ products.map(() => {

        })}*/}
          <ProductItem productTitle='Teste Teste Teste' productPrice='R$330,00'/>
          <ProductItem productTitle='Teste Teste Teste' productPrice='R$330,00'/>
          
          <ProductItem productTitle='Teste Teste Teste' productPrice='R$330,00'/>
          <ProductItem productTitle='Teste Teste Teste' productPrice='R$330,00'/>
          <ProductItem productTitle='Teste Teste Teste' productPrice='R$330,00'/>
          
          <ProductItem productTitle='Teste Teste Teste' productPrice='R$330,00'/>
          <ProductItem productTitle='Teste Teste Teste' productPrice='R$330,00'/>
          <ProductItem productTitle='Teste Teste Teste' productPrice='R$330,00'/>
          
          
        </div>

    </section>
  )
}

export default Products
