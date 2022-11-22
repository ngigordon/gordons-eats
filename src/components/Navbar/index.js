import React from "react";
import { Nav, NavLink, Bars, NavIcons } from "./NavbarElements";
function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavLink to="/">Cameroon Meal</NavLink>
        <NavIcons onClick={toggle}>
          <p>menu</p>
          <Bars></Bars>
        </NavIcons>
      </Nav>
    </>
  );
}

export default Navbar;
