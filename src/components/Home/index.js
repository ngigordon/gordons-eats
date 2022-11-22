import React from "react";
import Feature from "../Features";
import Hero from "../Hero";
import Product from "../Products";
import { productData, productDataTwo } from "../../components/Products/data";
import { GlobalStyle } from "../../globalStyle";

function Homepage({ cart, handleChange, setCart, handleClick }) {
  return (
    <>
      <GlobalStyle />
      <Hero cart={cart} handleChange={handleChange} setCart={setCart} />

      <Product
        heading="choose some good african meals"
        data={productData}
        handleClick={handleClick}
      />
      <Feature />
      <Product
        heading="Sweet Treats for You"
        data={productDataTwo}
        handleClick={handleClick}
      />
    </>
  );
}

export default Homepage;
