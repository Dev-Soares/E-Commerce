import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import Product from "../components/Product"
import { useState } from 'react'

const MainPage = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className=" min-h-screen w-full p-0 m-0">
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-full h-screen pt-4 flex justify-center gap-1 p-2 bg-gray-300">
        <Product imgUrl='public/table.webp' productTitle='Mesa Escritório Estudo Trabalho Moderna Grande Industrial'/>
        <Product imgUrl='public/chair.webp'  productTitle='Cadeira De Escritorio Begonia Tela Mesh E'/>
        
      </div>
    </main>
  )
}

export default MainPage
