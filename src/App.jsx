import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductList from "./pages/ProductList";
import "./App.css"

function App() {
  return (
    <div className="App">
      <ProductList />
      <ToastContainer />
    </div>
  );
}

export default App;
