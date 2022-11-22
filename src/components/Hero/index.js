import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBTN,
} from "./HeroElement";

const Hero = ({ cart, setCart, handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        // cart={cart}
        // handleChange={handleChange}
        // setCart={setCart}
      />
      <HeroContent>
        <HeroItems>
          <HeroH1> Best Restuarant in Town</HeroH1>
          {/* <HeroP>Ready in 60sec</HeroP> */}
          <HeroP>
            Cameroon cuisine is refined cuisine thanks to the use of spice
            blends that create the most epic meals. Cameroon has a mix of a
            diverse ethnic and cultural groups that gives placed to a versatile
            dishes. Cameroon cuisine is influenced by Portuguese, French and
            German; however Cameroon has remain true to tradition by continuing
            to provide a rich culture center traditional food.
          </HeroP>
          <HeroBTN>Place Order</HeroBTN>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
