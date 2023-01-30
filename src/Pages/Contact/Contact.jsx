import React from 'react';
import styled from 'styled-components';
import FeaturedBar from '../../Components/FeaturedBar/FeaturedBar';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import { Title } from '../../global.styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { media } from '../../globalStyles';



const ContactContainer = styled.div`
  margin: 40px;
  margin-top: 70px;
  display: flex;
  background-color:white !important;
  justify-content:center;
  ${media.mobile}{
    flex-direction:column;
  }
`;

const ContactField= styled.div`
margin-top:15px;
display:flex;
align-items:center;
gap:15px;
`

const ContactLeft = styled.div`
  flex: 1;

  margin-left:60px;
  margin-right:60px;
  border-right: 1px solid grey;

  ${media.mobile}{
    width: 100%;
    margin-right:0px !important;
    margin-left:-10px !important;
    border-right:0px;
    border-left:3px solid rgb(236, 57, 92);
    padding-left:15px;
    margin-bottom: 20px;
  }

`;
const ContactRight = styled.div`
  flex: 1;
margin-left:60px;
${media.mobile}{
  width: 100%;
  margin-right:0px !important;
  margin-left:-10px !important;
  border-right:0px;
  margin-top: 20px;

  h1{
    font-size: 22px !important;
  }
}
`;


const Form = styled.form`
  display: flex;
  align-items:flex-start;
  flex-direction: column;
  width:100%;
`;


const InputText = styled.h3`
 
  font-size:18px;
  margin-top:12px;

  ${media.mobile}{
    font-size: 16px;
  }
`;

const Input = styled.input`
 
  width:400px;
  height:40px;
  padding: 10px;
  ${media.mobile}{
    width:320px;
    height:35px;
    padding: 6px;
  }
`;

const TextArea= styled.textarea`
width:400px;
height: 200px;
padding:10px;
resize:none;
${media.mobile}{
  width:320px;
  padding: 6px;
}
`

const Button = styled.button`
  width: 40%;
  border: none;
  background-color: crimson;
  color: white;
  cursor: pointer;
  margin: 20px 0px;
  height: 35px;
`;

const ImgContainer = styled.div`

height: 40vh;
background-image: url("https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGFjdHxlbnwwfHwwfHw%3D&w=1000&q=80");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;


`

const Contact = () => {
  return (
    <div style={{backgroundColor:"white"}}>
        
    <Navbar/>

    <ImgContainer>
    <Title style={{marginBottom: "30px", color:"white"}}>Conact Us:</Title>
    </ImgContainer>

    <ContactContainer>
        <ContactLeft>
        <h1 style={{color:"rgb(58, 58, 58)", marginBottom: "25px"}}>	Get in Touch!</h1>
          <p style={{marginBottom: "30px"}}>
           Visit our shop for high quality electronics gadgets, and visit our tursted repair lab.
          </p>

          <ContactField>
            <LocationOnIcon style={{color:"#3681e3"}}/>MMM Haji Iqbal Plaza, Kabal, Swat, Pakistan 
            </ContactField>
          <ContactField>
            <CallIcon style={{color:"#3681e3"}}/> +92 345 9146648 
            </ContactField>
          <ContactField>
            <MailOutlineIcon style={{color:"#3681e3"}}/> mmmshop@gmail.com
            </ContactField>
         

         
        </ContactLeft>

        <ContactRight>
          <h1 style={{color:"rgb(58, 58, 58)", marginBottom: "10px"}}>	Drop us a line or two</h1>
        <Form>
          <InputText>Name</InputText>
          <Input placeholder="name" />
          <InputText>Email</InputText>
          <Input placeholder="Email" />
          <InputText>Comment or Message</InputText>
          <TextArea style={{}} placeholder="Comment or Message"></TextArea>
          <Button>Submit</Button>
          
        </Form>
        </ContactRight>
      </ContactContainer>


    
    <Footer/>
    
    </div>
  )
}

export default Contact