import React from "react";
import styled from "styled-components";
import FeaturedBar from "../../Components/FeaturedBar/FeaturedBar";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { Title } from "../../global.styles";
import { media } from "../../globalStyles";

const AboutContainer = styled.div`
  margin: 40px;
  margin-top: 70px;
  margin-bottom: 70px;
  display: flex;
`;

const AboutLeft = styled.div`
  flex: 2;
  margin-top: 40px;
  width: 50%;
`;
const AboutRight = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: flex-end;
  img {
    height: 600px;
    width: 90%;
    object-fit: cover;
    border-left: 8px solid coral;
    border-top: 8px solid coral;
  }

  ${media.mobile} {
    display: none;
  }
`;

const ImgContainer = styled.div`
  height: 40vh;
  background-image: url("https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdhZGdldHxlbnwwfHwwfHw%3D&w=1000&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const About = () => {
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <Navbar />

      <ImgContainer>
        <Title style={{ marginBottom: "30px", color: "white" }}>
          About Us:
        </Title>
      </ImgContainer>

      <AboutContainer>
        <AboutLeft>
          <p style={{ fontWeight: "600" }}>
            Welcome to our website! We are a team of professionals dedicated to
            providing high-quality smartphone repair services to our customers.
            In addition to our repair services, we also offer a wide selection
            of repairing accessories and tools for those who prefer to fix their
            own devices. 
          </p>
          <br />
          <br />
          <p>In addition to repair services and accessories, we also
            sell a variety of smartphones and smartphone accessories. From the
            latest releases to more budget-friendly options, we have something
            for everyone. Our team is knowledgeable about all of the products we
            sell and can help you find the perfect fit for your needs and
            budget.</p>
            <br/>
            <p>
               We are committed to delivering excellent customer service
            and ensuring that all of our clients leave satisfied with their
            experience. Thank you for considering us for all of your smartphone
            repair and accessory needs.
            </p>
         
         
        </AboutLeft>

        <AboutRight>
          <img
            src="https://media.istockphoto.com/id/1138251272/photo/smartphones-on-the-counter-of-a-electronics-store.jpg?b=1&s=170667a&w=0&k=20&c=hjO63udAnkQJDkSwJIodY7buM0TIsLMdJA9VrgzpoP8="
            alt=""
          />
        </AboutRight>
      </AboutContainer>

      <FeaturedBar title="Featured Products" variation="about" />

      <Footer />
    </div>
  );
};

export default About;
