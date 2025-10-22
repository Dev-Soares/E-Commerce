import Navbar from "../components/Navbar.jsx"
import Hero from "../components/mainPageSections/Hero.jsx"
import Products from "../components/mainPageSections/Products.jsx"
import Footer from "../components/Footer.jsx"

const MainPage = () => {


  return (
    <main className=" min-h-screen w-full p-0 m-0 overflow-y-auto">
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </main>
  )
}

export default MainPage
