import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ListProductPage from './pages/ListProductPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import CartPage from './pages/CartPage.jsx'
import axios from 'axios'
import { AlertProvider } from './contexts/AlertContext.jsx';
import { CartProvider } from './contexts/CartContext.jsx';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <AlertProvider>
        <CartProvider>
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
        </CartProvider>
      </AlertProvider>
    </BrowserRouter>
  </StrictMode>,
)
