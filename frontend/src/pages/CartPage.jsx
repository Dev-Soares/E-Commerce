import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import { useEffect, useState } from "react"
import CartProduct from "../components/smallComponents/CartProduct"
import axios from "axios"



const ListProductPage = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const fetchCartItems = async () => { 

      try {
        const response = await axios.get("/cart");
        console.log("Cart items fetched:", response.data);
        setCartItems([...response.data]);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    useEffect(() => {
      fetchCartItems();
    }, []);

  return (

    <main className=" min-h-screen w-full p-0 m-0 ">
        <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className="min-h-screen w-full flex flex-col gap-8 p-8 md:p-16 bg-white ">
          <div className="w-full h-auto flex justify-start items-start mb-4 ">
            <h3 className="text-4xl! font-semibold text-[var(--color-main)] flex justify-center items-center gap-2"><span className="material-symbols-outlined text-5xl!">shopping_cart</span>Your Cart</h3>
          </div>
          <div className="w-full h-auto flex flex-col  gap-8 ">
            {cartItems.length === 0 ? (
              <p className="text-xl! font-normal text-gray-500">Your cart is empty.</p>
            ) : (
              cartItems.map(item => (
                <CartProduct key={item.product.id} productId={item.product.id} productTitle={item.product.title} productValue={item.product.price} productCategory={item.product.category} productQuantity={item.product.quantity} />
              ))
            )}
          </div>
             
          

        </div>
        

        <Footer />
    </main>
  )
}

export default ListProductPage