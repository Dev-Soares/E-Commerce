import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import ProductList from "../components/ProductList"
import SearchInput from "../components/SearchInput"
import { useState } from 'react'

const MainPage = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className=" min-h-screen w-full p-0 m-0 overflow-y-auto">
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="h-full w-full bg-gray-300 p-2 overflow-x-hidden flex flex-col justify-center">
        <SearchInput />
        <ProductList />
      </div>  
    </main>
  )
}

export default MainPage
