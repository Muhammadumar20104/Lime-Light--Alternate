// import {  } from "@material-tailwind/react";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { ProductProvider } from "./components/ProductContext";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ProductProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProductProvider>

    </>
  );
}

export default App;
