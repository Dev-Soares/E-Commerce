import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import { useState } from "react"
import axios from "axios"


const ListProductPage = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productCategory, setProductCategory] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const productData = {
            title: productName,
            price: parseFloat(productPrice),
            description: productDescription,
            category: productCategory
        }

        const clearInputs = () => {
            setProductName("");
            setProductPrice("");
            setProductDescription("");
            setProductCategory("");
        }

        try {
            await axios.post('/products/create-product', productData);
            clearInputs();
            successAlert("Product listed successfully!");
        } catch (error) {
            console.error("Error listing product:", error);
            errorAlert("Failed to list product.");
        }

    }

  return (
    <main className=" min-h-screen w-full p-0 m-0 ">
        <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className=" min-h-auto w-full flex p-8 py-34 flex-col items-center bg-gray-100">
            <h1 className=" text-3xl font-bold text-[var(--color-main)]">List your Product </h1>

            <form onSubmit={handleSubmit} className="w-full max-w-md mt-8 bg-white p-6 rounded-lg shadow-md flex flex-col">
                <div className="flex flex-col gap-4 mt-6">
                    <label className="font-medium text-lg">Product Name</label>
                    <input type="text" className="border border-gray-300 rounded-md p-2 w-full" placeholder="Enter product name" value={productName} onChange={(e) => setProductName(e.target.value)} required />
                </div>
                <div className="flex flex-col gap-4 mt-6">
                    <label className="font-medium text-lg">Product Price</label>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                        <span className="bg-gray-100 px-3 py-2 text-gray-600 border-r border-gray-300">$</span>
                        <input 
                            type="number" 
                            step="0.01"
                            className="p-2 w-full focus:outline-none" 
                            placeholder="0.00" 
                            value={productPrice} 
                            onChange={(e) => setProductPrice(e.target.value)} 
                            required 
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4 mt-6">
                    <label className="font-medium text-lg">Product Description</label>
                    <textarea className="border border-gray-300 rounded-md p-2 w-full h-40 flex justify-start items-start" placeholder="Enter product description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required />
                </div>
                <div className="flex flex-col gap-4 mt-6">
                    <label className="font-medium text-lg">Category</label>
                    <select required
                        value={productCategory} 
                        onChange={(e) => setProductCategory(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-main)]"
                    >
                        <option value="" disabled>Select a category</option>
                        <option value="technology">Technology</option>
                        <option value="sports">Sports</option>
                        <option value="furniture">Furniture</option>
                        <option value="home-appliances">Home Appliances</option>
                        <option value="tools">Tools</option>
                    </select>
                </div>
                <button type="submit" className="mt-6 px-6 py-3 bg-[var(--color-main)] text-white rounded-lg hover:bg-[var(--color-main-light)] transition font-semibold cursor-pointer hover:translate-y-[-2px] duration-600">
                    List Product
                </button>
            </form>
        </div>

        <Footer />
    </main>
  )
}

export default ListProductPage
