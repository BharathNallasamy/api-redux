import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import ProductComponent from "./components/ProductComponent";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/products/:productId" element={<ProductComponent />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
