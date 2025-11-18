import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import axios from 'axios'
import { AlertProvider } from './contexts/AlertContext.jsx';
import { CartProvider } from './contexts/CartContext.jsx';
import { store } from './state/store.js';
import { Provider } from 'react-redux';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

createRoot(document.getElementById('root')).render(
  <StrictMode>   
    <BrowserRouter>
      <Provider store={store}>
        <AlertProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AlertProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
