const Footer = () => {

    return (
        <footer className="w-full h-auto bg-[var(--color-main)] text-white p-6 py-18 flex flex-col gap-7">
            <div className=" flex flex-col lg:flex-row gap-7 md:gap-10 lg:justify-around">
                <div className="flex flex-col gap-4 border-l-2 pl-6">
                <h4 className="font-bold text-2xl lg:text-4xl">About Megashop</h4>
                <ul className="ml-1 font-medium flex flex-col gap-1 lg:gap-3 lg:text-lg">
                    <li className="hover:scale-105 transition-transform duration-300 cursor-pointer">About Us</li>
                    <li className="hover:scale-105 transition-transform duration-300 cursor-pointer">Announce with us</li>
                    <li className="hover:scale-105 transition-transform duration-300 cursor-pointer">Become Partner</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4 border-l-2 pl-6">
                <h4 className="font-bold text-2xl lg:text-4xl">More help</h4>
                <ul className="ml-1 font-medium flex flex-col gap-1 lg:gap-3 lg:text-lg">
                    <li className="hover:scale-105 transition-transform duration-300 cursor-pointer">Contact Central</li>
                    <li className="hover:scale-105 transition-transform duration-300 cursor-pointer">Devolution Process</li>
                    <li className="hover:scale-105 transition-transform duration-300 cursor-pointer">Transporting Fees </li>
                </ul>
            </div>
            <div className="flex flex-col gap-4 border-l-2 pl-6">
                <h4 className="font-bold text-2xl lg:text-4xl">Social Media</h4>
                <ul className="ml-1 font-medium flex flex-col gap-1 lg:gap-3 lg:text-lg">
                    <li className="hover:scale-105 transition-transform duration-300 cursor-pointer">Instagram</li>
                    <li className="hover:scale-105 transition-transform duration-300 cursor-pointer">Facebook</li>
                    <li className="hover:scale-105 transition-transform duration-300 cursor-pointer">Twitter</li>
                </ul>
            </div>

            </div>
            
            
            <div className="flex justify-center items-center mt-12">
                <p className="text-gray-200 text-md">© 2025 MegaShop. All rights reserved.</p>
            </div>
            

        </footer>
    )


}

export default Footer