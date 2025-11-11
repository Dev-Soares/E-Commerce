import { useProducts } from '../../hooks/useProducts.js'
import ProductItem from '../smallComponents/ProductItem.jsx'
import SelectCategory from '../smallComponents/SelectCategory.jsx'


const Products = () => {

  const { products, category, setCategory, numberOfPages, pageShown, setPageShown } = useProducts();

  const handlePageChange = (newPage) => {
    setPageShown(newPage); 
  }

  return (
    <section id='products' className="min-h-screen w-full flex flex-col p-4 md:p-12 bg-white">
        <div className="flex flex-col p-3 mb-8 md:mb-14 gap-1">
            <h2 className="font-bold text-black text-3xl md:text-4xl xl:text-5xl">Today Offers </h2>
            <p className="text-gray-400 text-lg md:text-xl xl:text-2xl mt-1 lg:mt-3">Take advantage of amazing discounts!</p>
            <SelectCategory selectedCategory={category} setSelectedCategory={setCategory} />
        </div>
        
        <div className="flex justify-center items-center gap-4 md:gap-16 flex-wrap ">
          { products.map((product) => {
            return (
              <ProductItem 
                key={product.id}
                productTitle={product.title} 
                productPrice={product.price} 
                productCategory={product.category} 
                productId={product.id}
                productDescription={product.description}
              />
            )
          })}
          
        </div>
        <div className='flex flex-row gap-4 self-center my-16'>
            { numberOfPages.map((page) => {
              return (
                <button className={` p-2 px-3 font-bold border-2 border-[var(--color-main-light)] text-lg rounded-lg text-[var(--color-main)] bg-white hover:bg-[var(--color-main-light)] transition-all duration-600 cursor-pointer hover:translate-y-[-2px] ${pageShown === page ? 'border-[var(--color-main)]! bg-[var(--color-main)]! text-white!' : '' }`}
                key={page}
                 onClick={() => handlePageChange(page)}>
                  {page}
                </button>
              )
            })}
          </div>

    </section>
  )
}

export default Products
