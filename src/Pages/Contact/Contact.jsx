import React from 'react'
import styled from 'styled-components'
import FeaturedBar from '../../Components/FeaturedBar/FeaturedBar'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import { Title } from '../../global.styles'





const AboutContainer = styled.div`

width: 80%;
margin: 80px;
height: 30vh;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;


`

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
    <div style={{backgroundColor:"whitesmoke"}}>
        
    <Navbar/>

    <ImgContainer>
    <Title style={{marginBottom: "30px", color:"white"}}>Conact Us:</Title>
    </ImgContainer>


    <AboutContainer>
    
        
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil blanditiis, molestias delectus iste aliquam deserunt reprehenderit consequatur enim sunt nemo quae veniam vitae sapiente harum, deleniti, autem modi mollitia accusantium?
        Nemo est animi ab illo eligendi. Tempora, autem? Quibusdam earum corporis alias, enim iste dolorum fugiat ratione accusamus cumque voluptatibus sapiente ut? Tempora fugiat doloremque nihil nobis ea corrupti veritatis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </AboutContainer>


    
    <Footer/>
    
    </div>
  )
}

export default Contact