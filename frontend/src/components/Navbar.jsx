
// ...existing code...
const Navbar = () => {
  return (
    <header className="w-full h-auto">
        <nav className="h-16 w-full flex items-center justify-between p-4 px-5  text-white">
            <div className="w-auto h-full">
                <h1 className="text-lg text-[var(--color-main)] font-bold">MegaShop</h1>
            </div>
            <div className="w-auto h-full flex justify-center items-center ml-5">
                
                <div className="relative w-[100%] max-w-lg">
                  
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-main)] pointer-events-none">
                    search
                  </span>
                  
                  <input
                    type="text"
                    className="w-full pl-10 focus:border-2 border-[var(--color-main)] rounded-xl text-black p-2"
                    placeholder="Search..."
                  />
                </div>
            </div>
            <div className="w-auto h-full flex justify-center items-center ">
                <button className="text-[var(--color-main)] px-4 py-2 rounded-xl cursor-pointer"><span className="material-symbols-outlined">shopping_cart</span></button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
