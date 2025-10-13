import Product from "../components/Product"

const ProductList = () => {


  return (
    <div className="w-full h-screen pt-4 flex flex-wrap justify-center gap-1 gap-y-4 lg:gap-x-2 2xl:gap-x-16">
        <Product imgUrl='public/table.webp' productTitle='Mesa Escritório Estudo Trabalho Moderna Grande Industrial' productPrice='350,00'/>
        <Product imgUrl='public/chair.webp'  productTitle='Cadeira De Escritorio Begonia Tela Mesh E' productPrice='200,00'/>
        <Product imgUrl='public/table.webp' productTitle='Mesa Escritório Estudo Trabalho Moderna Grande Industrial' productPrice='350,00'/>
        <Product imgUrl='public/chair.webp'  productTitle='Cadeira De Escritorio Begonia Tela Mesh E' productPrice='200,00'/>
        <Product imgUrl='public/table.webp' productTitle='Mesa Escritório Estudo Trabalho Moderna Grande Industrial' productPrice='350,00'/>
        <Product imgUrl='public/chair.webp'  productTitle='Cadeira De Escritorio Begonia Tela Mesh E' productPrice='200,00'/>
        
      </div>
  )
}

export default ProductList
