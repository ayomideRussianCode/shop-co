import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-detail/:id" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
