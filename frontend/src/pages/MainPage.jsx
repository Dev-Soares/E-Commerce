import Navbar from "../components/Navbar.jsx"
import Hero from "../components/mainPageSections/Hero.jsx"
import Products from "../components/mainPageSections/Products.jsx"
import Footer from "../components/Footer.jsx"
import SideBar from "../components/Sidebar.jsx"
import { useState } from "react"

const MainPage = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return (
    <main className=" min-h-screen w-full p-0 m-0 overflow-y-auto">
      <Navbar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
      <Hero />
      <Products />
      <Footer />
      <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </main>
  )
}

export default MainPage
