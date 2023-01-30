import { Add, Remove } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { Title } from "../../global.styles";
import { media } from "../../globalStyles";

/* import { mobile } from "../responsive"; */

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 40px;
  ${media.mobile}{
   
    padding:5px;
      }
`;


const Top = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  ${media.mobile}{
  justify-content:center;
width:99%;
padding:5px;
  }
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled"?"none": "1.5px solid crimson"};
  background-color: ${(props) =>
    props.type === "filled" ? "#1F4690" : "transparent"};
  color: ${(props) => props.type === "filled"? 'white': "crimson"};

  ${media.mobile}{
    padding:3px;
    display:none;
        }
`;

const TopTexts = styled.div`
  
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.mobile}{
  flex-direction:column;
      }
  
`;

const Info = styled.div`
  flex: 3;
  margin-left:20px;
  color:lightCoral;
  ${media.mobile}{
   display:flex;
   justify-content:center;
        }
    
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
 
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
 
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid crimson;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  ${media.mobile}{
    padding:15px;
    margin:5px 20px;
    margin-top:20px
        }
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #1F4690;
  color: white;
  font-weight: 600;
  border: none;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Title style={{textAlign:'center', marginTop:'30px'}}>YOUR <span>CART</span></Title>
      <Wrapper>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <span>{'    '}</span>
        </Top>
        <Bottom>
          <Info>
            Your Cart is Empty
           
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 00.0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ 00.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 00.00</SummaryItemPrice>
            </SummaryItem>
            <Button>
              <Link to="/checkout" style={{textDecoration:"none",color:"white"}}> CHECKOUT NOW </Link></Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  );
};

export default Cart;