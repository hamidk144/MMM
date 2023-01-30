import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import styled from "styled-components";

const CheckoutContainer= styled.div`
height:100vh;
width:100vw;
overflow:hidden !important;
background-color: #8BC6EC;
background-image: linear-gradient(135deg, #8BC6EC 0%, #747ada 100%);
display:flex;

align-items:center;
padding-top:300px;
flex-direction:column;

h2{
    color:black;
    font-size:22px;
    margin:2px !important;
    text-align: center;
}

`

const Checkout = () => {
  return (
    <>
    <Navbar />
    <CheckoutContainer>
<h2>Sorry Online Shopping is currently not Available </h2>
<br/>
<Link to='/contact' style={{fontSize:'20px'}} >Please visit our store</Link>
    </CheckoutContainer>
    </>
  )
}

export default Checkout