import styled from "styled-components";
import { media } from "../../globalStyles";

export const NavTop = styled.div`
  height: 35px;
  background-image: linear-gradient(to right, #7aa5df, #3b7cd1, #1f4690);
  /* background-color:#1F4690; */
  border-bottom: 0.1px solid rgba(76, 17, 25, 0.349);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const NavMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(253, 249, 249, 0.827);
  border-bottom: 0.1px solid rgba(76, 17, 25, 0.349);
  height: 70px;
  position: sticky !important;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(6px);

  .active {
    color: crimson !important;
  }
  .mainlink {
    text-decoration: none !important;
    color: black;
  }
  transition: transform 1s ease;
`;

export const WrapperTop = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const WrapperMiddle = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(240, 248, 255, 0.137);
`;

export const NavItems = styled.h3`
  &:hover {
    opacity: 0.7;
    color: crimson !important;
  }

  font-size: ${({ variant }) => {
    return variant === "mainColor" ? "16px" : "14px";
  }};
  margin: 0px 10px;
  font-weight: ${({ variant }) => {
    return variant === "mainColor" ? 600 : 500;
  }};
  color: ${({ variant }) => {
    return variant === "mainColor" ? "black" : "#fff";
  }};
  cursor: pointer;
  transition: transform 0.15s ease;

  .link {
    text-decoration: none !important;
    color: ${({ variant }) => {
      return variant === "mainColor" ? "black" : "#fff";
    }};
  }

  .products {
    text-decoration: none !important;
    color: black;
  }
`;

export const LogoContainer = styled.h1`
  color: crimson;
  font-weight: 600;
  font-size: 35px;
  flex: 1;
  margin-top: 10px;

  &:hover {
    transform: scale(0.995);
    opacity: 0.85;
  }

  img {
    width: 70px;
  }

  ${media.mobile} {
    img {
      width: 50px;
    }
  }
`;

export const MiddleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 3;

  ${media.mobile} {
    display: none;
  }
`;

export const Searchcontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 37px;
  width: 330px;
  border: 0.05px solid rgba(203, 45, 66, 0.542);
  display: flex;

  ${media.tablet} {
    display: none;
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  width: 260px;
  color: crimson;
  font-size: 14px;
  font-weight: 400;
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  justify-content: space-between;
`;
export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SubMenu = styled.div`
  position: absolute;

  width: 200px;
  top: 45px;
  background-color: rgba(253, 249, 249, 0.927);
  backdrop-filter: blur(10px) !important;
  .link {
    border-bottom: none !important;
    text-decoration: none;
    color: black;
  }
`;

export const MenuItems = styled.div`
  font-size: 14px;
  height: 40px;
  text-decoration: none;
  border-bottom: 0.1px solid lightgrey;
  color: black;
  cursor: pointer;
  padding: 10px;

  &:hover {
    background-color: rgba(254, 249, 249, 0.99);
  }

  span {
    margin-left: 3px;
  }
`;

export const BurgerMenu = styled.div`
  ${media.tablet} {
    display: none;
  }

  ${media.mobile} {
    display: inline;
  }
`;
