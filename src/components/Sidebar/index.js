import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Fufu</SidebarLink>
        <SidebarLink to="/">Achu</SidebarLink>
        <SidebarLink to="/">Ekwang</SidebarLink>
      </SidebarMenu>
      <SidebarBtnWrap>
        <SidebarRoute to="/">Order now</SidebarRoute>
      </SidebarBtnWrap>
    </SidebarContainer>
  );
}

export default Sidebar;
