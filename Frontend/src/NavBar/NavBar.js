import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../SideBar/Sidebar";
const NavbarTop = () => {
  const [showSidebar,setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }
  return (
    <>
    <div className="outer-nav-bar">
      <div className="title"><span className="span-title">Aura Design Atelier</span></div>
      <MenuIcon className="menu-icon" onClick={()=>toggleSidebar()}/>
    </div>
    {showSidebar && <Sidebar showSidebar={showSidebar} onClickOutside={()=>toggleSidebar()}/>}
    </>
  );
};
export default NavbarTop;
