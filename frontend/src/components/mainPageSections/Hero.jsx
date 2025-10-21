

const Hero = () => {
  return (
    <section className='bg-[url("../../../public/hero.png")] bg-cover bg-center h-[400px] w-full flex justify-center items-center p-5'>
      <div className=" w-full">
        <h1 className='text-white text-4xl font-bold'>Welcome to <span className="bg-gradient-to-r from-[var(--color-main-light)] to-[var(--color-main)] bg-clip-text text-transparent">MegaShop</span></h1>
        <p className='text-white mt-2 font-semibold'>Your one-stop shop for all things awesome!</p>
        <button className='mt-4 px-6 py-2 bg-[var(--color-main)] text-white rounded-lg hover:bg-[var(--color-main-dark)] transition flex justify-around items-center gap-1 font-semibold'>
          Shop Now <span className='material-symbols-outlined'>arrow_forward_ios</span>
        </button>
      </div>

    </section>
  )
}

export default Hero
