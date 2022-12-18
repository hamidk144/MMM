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
  margin-top:40px;
  width:50%;
`;
const AboutRight = styled.div`
  flex: 1.5;
  display:flex;
  justify-content: flex-end;
  img{
    height:600px;
    width: 90%;
    object-fit:cover;
    border-left: 8px solid coral;
    border-top: 8px solid coral;
  }

  ${media.mobile} {
    display:none;
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
        <Title style={{ marginBottom: "30px", color: "white" }}>About Us:</Title>
      </ImgContainer>

      <AboutContainer>
        <AboutLeft>
          <p style={{fontWeight:"600"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            blanditiis, molestias delectus iste aliquam deserunt reprehenderit
            consequatur enim sunt nemo quae veniam vitae sapiente harum,
            deleniti, autem modi mollitia accusantium? Nemo est animi ab illo
            eligendi. Tempora, autem? Quibusdam earum corporis alias, enim iste
            dolorum fugiat ratione accusamus cumque voluptatibus sapiente ut?
            Tempora fugiat doloremque nihil nobis ea corrupti veritatis!
          </p>
          <br />
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            blanditiis, molestias delectus iste aliquam deserunt reprehenderit
            consequatur enim sunt nemo quae veniam vitae sapiente harum,
            deleniti, autem modi mollitia accusantium? Nemo est animi ab illo
            eligendi. Tempora, autem? Quibusdam earum corporis alias, enim iste
            dolorum fugiat ratione accusamus cumque voluptatibus sapiente ut?
            Tempora fugiat doloremque nihil nobis ea corrupti veritatis!
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
