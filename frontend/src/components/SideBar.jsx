import { XMarkIcon } from '@heroicons/react/24/solid'

const SideBar = ({ isOpen, setIsOpen }) => {
    return (
        <>
            {isOpen && (

                <aside className='top-0 fixed w-[75%] md:w-[60%] lg:w-[35%] h-full text-white flex flex-col items-center space-y-3  shadow-md z-10 transition-all right-0 duration-300 ease-out justify-between color-side py-8'>

                    <div>
                        <button className={`${isOpen ? '' : 'hidden'} text-[var(--color-white)] flex flex-col justify-center items-center`} onClick={() => setIsOpen(false)}>
                            <XMarkIcon className="h-15 md:h-15 w-15 md:w-15  text-white cursor-pointer" />
                        </button>
                    </div>

                    <div className='flex flex-col h-full w-auto justify-center items-start gap-14 text-2xl font-item'>
                        <button className='flex w-full h-auto justify-center items-center gap-2 '>
                            <img src="public/cart.png" alt="" className='w-[10%]'/>
                            Meu Carrinho
                        </button>

                        <button className='flex w-full h-auto justify-center items-center gap-2 '>
                            <img src="public/writing.png" alt="" className='w-[10%]'/>
                            Anuncie aqui
                        </button>
                    </div>
                    <div className='w-[50%] flex justify-center items-center'>


                        <button className='bg-white text-[var(--color-main)] font-title p-2 text-xl w-[90%] rounded-xl'>
                            Sair
                        </button>
                    </div>
                    

                </aside>

            )}
        </>
    )
}

export default SideBar
