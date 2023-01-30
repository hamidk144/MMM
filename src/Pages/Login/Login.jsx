import styled from "styled-components";
import Navbar from "../../Components/Navbar/Navbar";
import { media } from "../../globalStyles";
/* import {mobile} from "../responsive"; */

const Container = styled.div`
  width: 100vw;
  height: 100vh ;
  background-color: #0093E9;
background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);

  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.mobile}{
  height: 100vh;
    background-size: cover;

  }
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;

  ${media.mobile}{
    width: 90%

  }
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  
  background-color: crimson;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  height: 35px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (

    <>
    <Navbar/>

    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
    </>
  );
};

export default Login;