const Navbar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  return (
    <header className="w-full h-auto fixed border-product bg-white p-4 lg:py-6 shadow-md z-50 md:px-16">
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
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
