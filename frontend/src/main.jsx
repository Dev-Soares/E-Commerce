import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ListProductPage from './pages/ListProductPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import CartPage from './pages/CartPage.jsx'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3333/api';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes> 
          <Route 
              path='/'
              element={
                <MainPage />
              }
            />
            <Route
              path="/list-product"
              element={
                <ListProductPage />
              }
            />
            <Route
              path="/product-page"
              element={
                <ProductPage />
              }
            />
            <Route
              path="/cart-page"
              element={
                <CartPage />
              }
            />


      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
