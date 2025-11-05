import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import { useEffect, useState } from "react"
import CartProduct from "../components/smallComponents/CartProduct"
import axios from "axios"



const ListProductPage = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchCartItems = async () => {

    try {
      const response = await axios.get("/cart");
      console.log("Cart items fetched:", response.data);
      setCartItems([...response.data]);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const getTotalPrice = () => {
    let total = 0;
    return cartItems.reduce((accumulator, item) => {
      return accumulator + (item.product.price * item.quantity);
    }, 0);
  }

  useEffect(() => {
    setTotalPrice(getTotalPrice());
  }, [cartItems]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (

    <main className=" min-h-screen w-full p-0 m-0 ">
      <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="min-h-screen w-full flex flex-col justify-center items-start p-8 md:p-16 bg-gray-100 ">
        <div className="min-h-screen w-full flex flex-col  gap-8  ">
          <div className="w-full h-auto flex justify-start items-start mb-4 ">
            <h3 className="text-4xl! font-semibold text-[var(--color-main)] flex justify-center items-center gap-2"><span className="material-symbols-outlined text-5xl!">shopping_cart</span>Your Cart</h3>
          </div>
          <div className="w-full h-auto flex flex-col lg:flex-row">
            <div className="w-full h-auto flex flex-col lg:max-w-[60%]  gap-8 ">
            {cartItems.length === 0 ? (
              <p className="text-xl! font-normal text-gray-500">Your cart is empty.</p>
            ) : (
              cartItems.map(item => (
                <CartProduct key={item.product.id} productId={item.product.id} productTitle={item.product.title} productPrice={item.product.price} productCategory={item.product.category} productQuantity={item.quantity} />
              ))
            )}
          </div>
          <div className="w-full h-auto bg-white flex flex-col justify-center items-center p-5 mt-8 rounded-lg shadow-lg gap-8 md:max-w-[70%] lg:max-w-[50%] md:self-center ">
            <div className="flex justify-start items-start w-full">
              <h2 className="text-3xl! font-bold ">Order Summary</h2>
            </div>
            <div className="w-full h-auto flex flex-col justify-between items-start gap-4 ">
              <div className=" flex flex-row w-full justify-between">
                <h3 className="text-lg text-gray-500 font-semibold ">Subtotal</h3>
                <p className="text-xl font-bold text-[var(--color-main)] ">$ {totalPrice}</p>
              </div>
              <div className=" flex flex-row w-full justify-between">
                <h3 className="text-lg text-gray-500 font-semibold ">Shipping</h3>
                <p className="text-xl font-medium text-green-700 ">Free</p>
              </div>
            </div>


            <hr className="w-full border-t-2 border-gray-300" />

            <div className="w-full h-auto flex flex-row justify-between items-center ">
              <h3 className="text-2xl! font-semibold ">Total Price:</h3>
              <p className="text-2xl! font-bold text-[var(--color-main)] ">$ {totalPrice}</p>
            </div>

            <button className="w-full h-auto bg-[var(--color-main)] text-white font-semibold rounded-md p-3 mt-4 hover:translate-y-[-2px] hover:bg-[var(--color-main-light)] transition-all duration-300 xl:max-w-[50%] xl:text-lg cursor-pointer ">Proceed to Checkout</button>

          </div>
            
          </div>
          

        </div>

      </div>



      <Footer />
    </main>
  )
}

export default ListProductPage