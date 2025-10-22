

const Footer = () => {

    return (
        <footer className="w-full h-auto bg-[var(--color-main)] text-white p-4 pt-12 flex flex-col gap-7">
            
            <div className="flex flex-col gap-4">
                <h4 className="font-bold text-2xl">About Megashop</h4>
                <ul className="ml-1 font-medium flex flex-col gap-1">
                    <li>About Us</li>
                    <li>Announce with us</li>
                    <li>Become Partner</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h4 className="font-bold text-2xl">More help</h4>
                <ul className="ml-1 font-medium flex flex-col gap-1">
                    <li>Contact Central</li>
                    <li>Devolution Process</li>
                    <li>Transporting Fees </li>
                </ul>
            </div>
            <div className="flex justify-center items-center ">
                <p className="text-gray-200 text-md">© 2025 MegaShop. All rights reserved.</p>
            </div>
            

        </footer>
    )


}

export default Footer