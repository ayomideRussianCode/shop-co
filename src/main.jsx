import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import Category from "./pages/Category.jsx";
import Cart from "./pages/Cart.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-detail/:id" element={<ProductDetailPage />} />
        <Route path="/product-category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  </StrictMode>
);
