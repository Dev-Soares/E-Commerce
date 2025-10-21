import Navbar from "../components/Navbar.jsx"
import Hero from "../components/mainPageSections/Hero.jsx"
import Products from "../components/mainPageSections/Products.jsx"

const MainPage = () => {


  return (
    <main className=" min-h-screen w-full p-0 m-0 overflow-y-auto">
      <Navbar />
      <Hero />
      <Products />
    </main>
  )
}

export default MainPage
