import styled from "styled-components";
import { NavLink as link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
export const Nav = styled.nav`
  /* position: sticky; */
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  @media screen and (max-width: 400) {
    justify-content: flex-start;
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
    position: absolute;
    top: 20px;
    left: 5px;
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
  /* display: flex;
  justify-content: center;
  align-items: center; */
  color: #fff;
  p {
    transform: translate(-150%, 170%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaCartArrowDown)`
  font-size: 3rem;
  transform: translate(-50%, -15%);
`;
