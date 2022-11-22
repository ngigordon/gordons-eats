import styled from "styled-components";
import { NavLink as link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  @media screen and (max-width: 400) {
    justify-content: flex-start;
    height: 0px;
  }
`;

export const NavLink = styled(link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    /* position: absolute;
    top: 20px;
    left: 5px; */
    justify-content: space-between;
    font-size: 1.5rem;
  }
`;

export const NavIcons = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
