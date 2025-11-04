const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
     
      <aside
        className={`md:hidden fixed top-0 right-0 h-full w-[280px] bg-[var(--color-main)]/95 shadow-lg z-50 transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-white text-xl font-bold">Menu</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white hover:text-gray-200 transition"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>

          
          <nav className="flex flex-col gap-4 mt-21">
            <a
              href="/"
              className="text-white text-lg font-semibold hover:bg-white/10 p-3 rounded-lg transition"
            >
              Home
            </a>
            <a
              href="/"
              className="text-white text-lg font-semibold hover:bg-white/10 p-3 rounded-lg transition"
            >
              Products
            </a>
            <a
              href="#categories"
              className="text-white text-lg font-semibold hover:bg-white/10 p-3 rounded-lg transition"
            >
              Categories
            </a>
            
            <a
              href="/list-product"
              className="text-white text-lg font-semibold hover:bg-white/10 p-3 rounded-lg transition"
            >
              Announce with us
            </a>
          </nav>
        </div>
      </aside>
  )
}

export default Sidebar