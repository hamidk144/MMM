import React, { useState } from "react";
import Backdrop from "./Backdrop";
import "./leftDrawer.css";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../../globalStyles";

const LeftDrawer = ({isDrawerOpen ,setIsDrawerOpen}) => {
 /*  const [isDrawerOpen, setIsDrawerOpen] = useState(false); */
  const [selected, setSelected] = useState("");
  
  const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display:none;

  ${media.mobile}{
    display:block;
    margin-right:8px;
  }
  `

  const handleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const drawerLinks1 = ["Home"];
  const drawerLinks2 = ["Mobile Phones","Mobiles Accessories","Repair Acessories"];
  const drawerLinks3 = ["Repair Lab"];
  const drawerLinks4 = ["About", "Contact"];

  return (
    <div>
      <Button onClick={handleDrawer} >
       <MenuIcon/>
      </Button>


      <div className={isDrawerOpen?"clt-left-drawer open" : "clt-left-drawer"}>
        <div className="clt-left-drawer-wrapper">

          <ul>
           <NavLink to="/" className="sidedrawer--link">
            Home
           </NavLink>
          </ul>
          <hr />

          <ul>
            <h4>Products</h4>
            <NavLink  to="/products/mobilePhones" onClick={()=>setIsDrawerOpen(false)} className="sidedrawer--link">
            Mobile Phones
           </NavLink>
           <NavLink to="/products/mobileAcc" onClick={()=>setIsDrawerOpen(false)} className="sidedrawer--link">
           Mobiles Accessories
           </NavLink>
           <NavLink  to="/products/repairAcc" onClick={()=>setIsDrawerOpen(false)}   className="sidedrawer--link">
           Repair Acessories
           </NavLink>
           
            
          </ul>
          <hr />

          <ul>
          <NavLink  to="/repairlab"  className="sidedrawer--link">
           Repair Lab
           </NavLink>
          </ul>
          <hr />

          <ul>
            <h4>More</h4>

            <NavLink  to="/about"  className="sidedrawer--link">
          About Us
           </NavLink>
            <NavLink  to="/contact"  className="sidedrawer--link">
          Contact
           </NavLink>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftDrawer;
