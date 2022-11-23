import "./App.css";
import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import Hero from "./components/Hero";
import Product from "./components/Products";
import Feature from "./components/Features";
import Footer from "./components/Footer";
import Homepage from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";
import Navbar from "./components/Navbar";
function App() {
  const [cart, setCart] = useState([]);
  const handleClick = (items) => {
    console.log("helloworld");
    // setCart(() => {
    //   [];
    // });
  };
  const handleChange = () => {};
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              cart={cart}
              handleChange={handleChange}
              setCart={setCart}
              handleClick={handleClick}
            />
          }
        />
      </Routes>
      <Routes>
        <Route path="/itemDetail/:id/:price/:name" element={<ItemDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
