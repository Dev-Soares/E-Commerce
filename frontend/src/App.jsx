import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { cartActions } from "./state/cart/cartSlice";
import MainPage from "./pages/MainPage";
import ListProductPage from "./pages/ListProductPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import CartPage from "./pages/CartPage.jsx";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(cartActions.fetchCartTotalItems());
    dispatch(cartActions.fetchCartTotalPrice());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/list-product" element={<ListProductPage />} />
      <Route path="/product-page" element={<ProductPage />} />
      <Route path="/cart-page" element={<CartPage />} />
    </Routes>
  );
}

export default App;