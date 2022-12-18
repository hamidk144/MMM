import styled from "styled-components";
import Navbar from "../../Components/Navbar/Navbar";
import { media } from "../../globalStyles";
/* import {mobile} from "../responsive"; */

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 70px) ;
  
  background: linear-gradient(
      rgba(255, 255, 255, 0.216),
      rgba(255, 255, 255, 0.255)
    ),
    url("https://media.istockphoto.com/photos/textbooks-on-wooden-school-desk-with-chalkboard-picture-id1033277722?b=1&k=20&m=1033277722&s=170667a&w=0&h=sPkUuyDN23-yM5CHNN03qLo7Azph_Ud_SEcAJhelcjE=")
      center;
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