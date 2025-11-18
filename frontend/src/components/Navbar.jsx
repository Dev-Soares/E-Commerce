import { useSelector } from "react-redux";


const Navbar = ({ setIsSidebarOpen, isSidebarOpen }) => {

  const cartNumber = useSelector((state) => state.cart.totalItems);


  return (
    <header className="w-full h-auto border-product bg-white p-4 lg:py-6 shadow-md z-50 md:px-16">
      <nav className="w-full h-auto flex flex-row justify-between">
        <div className="flex justify-center items-center">
          <h1 className="text-xl md:text-2xl xl:text-3xl font-bold text-[var(--color-main)]">MegaShop</h1>
        </div>
        <div className="flex justify-center items-center text-[var(--color-main)] ">
          <div className="flex flex-row gap-6 md:hidden ">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            className=" flex justify-center items-center cursor-pointer hover:text-[var(--color-main-dark)] transition material-symbols-outlined">menu</button>
          </div>
          <ul className="hidden md:flex lg:text-lg xl:text-xl flex-row gap-6 lg:gap-10 xl:gap-14 font-semibold">
            <li><a href="/" className="inline-block hover:bg-[var(--color-main-light)] hover:text-white p-2 rounded-xl transition-all duration-600 hover:-translate-y-0.5 whitespace-nowrap will-change-transform antialiased">Home</a></li>
            <li><a href="/" className="inline-block hover:bg-[var(--color-main-light)] hover:text-white p-2 rounded-xl transition-all duration-600 hover:-translate-y-0.5 whitespace-nowrap will-change-transform antialiased">Products</a></li>
            <li><a href="/list-product" className="inline-block hover:bg-[var(--color-main-light)] hover:text-white p-2 rounded-xl transition-all duration-600 hover:-translate-y-0.5 whitespace-nowrap will-change-transform antialiased">Announce Here</a></li>
            <li>
              <a href="/cart-page" className="block hover:bg-[var(--color-main-light)] hover:text-white p-2 rounded-xl transition-all duration-600 hover:-translate-y-0.5 whitespace-nowrap will-change-transform antialiased">
               <span className="material-symbols-outlined">shopping_cart</span>{ cartNumber > 0 &&<span className='absolute font-normal top-[-4px] ml-6 rounded-full bg-[var(--color-main)] w-5 h-5 flex justify-center items-center text-white text-sm right-[-4px]'>{cartNumber}</span> }
               </a>
               </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
