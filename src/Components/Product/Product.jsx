import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { media } from "../../globalStyles";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  margin: 5px;
  min-width: 220px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:rgb(47, 44, 87);
  /* border-bottom: 4px solid crimson; */
 
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }

  ${media.mobile}{
    min-width: ${({ type }) => {
      return type === "homeproducts" ? "260px" : "150px";
    }};
   
    height: ${({ type }) => {
      return type === "homeproducts" ? "260px" : "150px";
    }};
  }



`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgb(255, 186, 154);
  position: absolute;

  ${media.mobile}{
    width: ${({ type }) => {
      return type === "homeproducts" ? "260px" : "140px";
    }};
   
    height: ${({ type }) => {
      return type === "homeproducts" ? "260px" : "140px";
    }};
  }
`;

const Image = styled.img`
  height: 220px;
  width: 220px;
  opacity: 0.9;
  object-fit: cover;
  z-index: 2;
  ${media.mobile}{

    width: ${({ type }) => {
      return type === "homeproducts" ? "260px" : "150px";
    }};
   
    height: ${({ type }) => {
      return type === "homeproducts" ? "260px" : "150px";
    }};
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({type, data }) => {
  return (
    <Container type={type}>
      <Circle type={type} />
      <Image src={data.img} type={type} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;