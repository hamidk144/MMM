import {
  PermIdentityOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UseClickOutside from "../../Helpers/UseClickOutside";
import LeftDrawer from "./leftMenu/LeftDrawer";
import Backdrop from "./leftMenu/Backdrop";
import {
  CartContainer,
  LogoContainer,
  MiddleContent,
  NavContainer,
  NavItems,
  NavMiddle,
  NavTop,
  Searchcontainer,
  WrapperMiddle,
  WrapperTop,
  Input,
  SubMenu,
  MenuItems,
  ProductsContainer,
  NavMainContainer,
  BurgerMenu
} from "./Navbar.style";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    let menuRef = UseClickOutside(() => {
        setIsActive(false);
      });

      useEffect(() => {
        const body= document.querySelector('body');
        body.style.overflow= isDrawerOpen? 'hidden':'auto';
        
      }, [isDrawerOpen])

  return (
    <>
   
      <NavTop>
        <WrapperTop>
          <NavItems variant="white">
            <Link className="link" to="/login">
              {" "}
              Login{" "}
            </Link>
          </NavItems>

          <NavItems variant="white">
            <Link className="link" to="/register">
              Register{" "}
            </Link>
          </NavItems>

          <NavItems variant="white">
            <Link className="link" to="/cart">
              Cart{" "}
            </Link>
          </NavItems>

          <NavItems variant="white">
            <Link className="link" to="/checkout">
              Checkout{" "}
            </Link>
          </NavItems>
        </WrapperTop>
      </NavTop>

      <NavMiddle>
        <WrapperMiddle>
          <LogoContainer>
            {" "}
            <Link to="/">
              {" "}
              <img src="/mmm.svg" alt="" />{" "}
            </Link>
          </LogoContainer>

          <MiddleContent>
            <NavItems variant="mainColor">
              <NavLink className="link" to="/">
                {" "}
                Home{" "}
              </NavLink>
            </NavItems>

            
              <ProductsContainer ref={menuRef}>
                
              <NavItems variant="mainColor">
                <div className="products" onClick={()=> setIsActive(true)}>Products</div> </NavItems>

                {isActive && 
                <SubMenu>
                 
                  <Link
                    onClick={() => setIsActive(false)}
                    to="/products/mobilePhones"
                   className="link"
                  >
                    <MenuItems>
                      Mobile Phones
                    </MenuItems>
                  </Link>

                  <Link
                    to="/products/mobileAcc"
                    onClick={() => setIsActive(false)}
                   className="link"

                  >
                    <MenuItems>
                     
                      Mobiles Accessories
                    </MenuItems>
                  </Link>
                  <Link
                   
                   to="/products/repairAcc"                   
                   onClick={() => setIsActive(false)}
                   className="link"

                 >
                  <MenuItems >
                   Repair Accessories
                  </MenuItems>
                  </Link>
                </SubMenu>
                }
              </ProductsContainer>
       

            <NavItems variant="mainColor">
              <NavLink className="link" to="/repairlab">
                {" "}
                RepairLab{" "}
              </NavLink>
            </NavItems>

            <NavItems variant="mainColor">
              <NavLink className="link" to="/about">
                {" "}
                About{" "}
              </NavLink>
            </NavItems>

            <NavItems variant="mainColor">
              <NavLink className="link" to="/contact">
                {" "}
                Contact{" "}
              </NavLink>
            </NavItems>

            <Searchcontainer>
              <Input></Input>
              <SearchOutlined style={{ color: "rgb(203, 45, 65)" }} />
            </Searchcontainer>

            <Link className="mainlink" to="/login">
              {" "}
              <PermIdentityOutlined style={{ fontSize: "28px" }} />{" "}
            </Link>

            <Link className="mainlink" to="/cart">
              <CartContainer>
                <ShoppingCartOutlined style={{ fontSize: "28px" }} />
                <span style={{ color: "rgb(203, 45, 65)" }}>0.00 $</span>
              </CartContainer>
            </Link>




          </MiddleContent>
         
        </WrapperMiddle>
      
        {isDrawerOpen && <Backdrop setIsDrawerOpen={setIsDrawerOpen} />}
        <LeftDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      
      </NavMiddle>
      
    </>
  );
};

export default Navbar;
