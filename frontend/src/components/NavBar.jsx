



const NavBar = ({isOpen, setIsOpen}) => {

    return (
        <header className={` h-full w-full text-[var(--color-white)]`}>
            <nav className="w-full h-auto flex flex-row justify-between items-center bg-[var(--color-main)] p-5">
                <div className='ml-2 flex justify-start items-center w-[30%] gap-2'>
                    <img src="/logo.png" alt="Logo E-Shop" className='w-[30%] md:w-[15%] lg:w-[18%] xl:w-[10%]' />
                    <h2 className='font-title text-xl lg:text-2xl mt-1.5 hidden md:flex justify-center items-center'>
                        E-Shopping
                    </h2>
                </div>
                <div className='m-2 xl:m-6'>
                    <button className={`${isOpen ? 'hidden' : ''} text-[var(--color-white)] flex flex-col justify-center items-center cursor-pointer`} onClick={() => setIsOpen(true)}>
                        <span className='h-1 md:h-1.5 xl:h-2 w-8 md:w-10 xl:w-14 bg-[var(--color-white)] transition-all duration-300 rounded-4xl'></span>
                        <span className='h-1 md:h-1.5 xl:h-2 w-8 md:w-10 xl:w-14 bg-[var(--color-white)] my-1 transition-all duration-300 rounded-4xl'></span>
                        <span className='h-1 md:h-1.5 xl:h-2 w-8 md:w-10 xl:w-14 bg-[var(--color-white)] transition-all duration-300 rounded-4xl'></span>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
