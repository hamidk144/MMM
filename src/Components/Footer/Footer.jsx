import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
import { media } from "../../globalStyles";
  /* import { mobile } from "../responsive"; */
  
  const Container = styled.div`
    display: flex;
    background-color: #353535;
    margin-top: 40px;
    padding-top: 40px;
    padding-bottom:20px;
    color: white;
    justify-content: center;
   
    
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-left: 60px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
    width: 80%;
    ${media.mobile}{
      display:none;
    }
  `;
  const Desc2 = styled.p`
  margin: 20px 0px;
  width: 80%;
    display:none;
    ${media.mobile}{
      display:block;
    }

  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${media.mobile}{
      display:none;
    }
   
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${media.mobile}{
      display:none;
    }
   
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>MMM.</Logo>
          <Desc>
            MMM is a consumer electronics store and RepairLab, dedicated to providing high-quality smartphones and repair services to customers.
        
          </Desc>
          <Desc2>
          &copy; 2022, MMM all rights reserved
          </Desc2>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> MMM Haji Iqbal Plaza , Kabal, Swat, Pakistan
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +92 345 9146648 
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> mmmshop@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;