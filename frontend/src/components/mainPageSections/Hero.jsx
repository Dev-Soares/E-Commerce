import CategoryCard from "../smallComponents/CategoryCard"

const Hero = () => {
  return (
    <section className='bg-gradient-to-br from-orange-700 to-orange-500 bg-cover bg-center auto pt-30 w-full flex flex-col lg:flex-row justify-center items-center p-9 md:gap-8 lg:gap-16 xl:gap-24 lg:px-25 lg:pb-20 lg:min-h-180'>
      <div className=" w-full h-auto">
        <h1 className='text-white text-4xl md:text-5xl xl:text-6xl font-bold'>Welcome to MegaShop</h1>
        <p className='text-white mt-2 font-semibold md:text-lg xl:text-xl xl:mt-4'>Your one-stop shop for all things awesome!</p>
        <button className=' cursor-pointer mt-4 px-6 py-2 bg-white text-[var(--color-main)] md:text-lg rounded-lg hover:translate-y-[-2px] hover:scale-105 transition flex justify-around items-center gap-1 font-semibold'>
          Shop Now <span className='material-symbols-outlined'>arrow_forward_ios</span>
        </button>
      </div>
      <div className="flex justify-start items-start gap-4 flex-wrap mt-8 lg:mt-0 lg:ml-16">
        <CategoryCard categoryName="Technology" categoryIcon="devices" />
        <CategoryCard categoryName="Sports" categoryIcon="sports_soccer" />
        <CategoryCard categoryName="Furniture" categoryIcon="chair" />
        <CategoryCard categoryName="Home " categoryIcon="kitchen" />
        <CategoryCard categoryName="Tools" categoryIcon="construction" />
        <CategoryCard categoryName="More" categoryIcon="more_horiz" />
      </div>

    </section>
  )
}

export default Hero
