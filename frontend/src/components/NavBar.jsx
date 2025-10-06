import cartIcon from '../assets/cart.png'


const NavBar = () => {
  return (
    <header className="bg-[var(--color-main)] h-full w-full text-[var(--color-white)] p-3 px-5">
        <nav className="w-full h-auto flex flex-row justify-between items-center">
            <div className='ml-2'>
                <h2 className='font-title text-xl'>
                    Shopee
                </h2>
            </div>
            <a href='' className="w-[20%] flex justify-center items-center p-2">
                <img src={cartIcon} alt="Cart Icon" className='w-[55%]' />
            </a>
        </nav>
    </header>
  )
}

export default NavBar
