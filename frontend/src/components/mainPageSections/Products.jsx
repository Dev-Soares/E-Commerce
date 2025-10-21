import ProductItem from '../smallComponents/ProductItem.jsx'

const Products = () => {

  const products = [];


  return (
    <section className="min-h-screen w-full flex flex-col p-4">
        <div className="flex flex-col p-3 mb-8">
            <h2 className="font-bold text-black text-3xl">Ofertas do Dia </h2>
            <p className="text-gray-400 text-lg">Aproveite descontos imperdíveis!</p>
        </div>
        {/*{ products.map(() => {

        })}*/}
        <div className="flex flex-col gap-2 flex-wrap">
          <ProductItem productTitle='Teste Teste Teste' productPrice='R$330,00'/>
        </div>

    </section>
  )
}

export default Products
