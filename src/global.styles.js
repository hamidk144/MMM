import styled from "styled-components";

export const Title = styled.h1`

color: rgb(28, 28, 28);
span{
    color: crimson;
    font-weight: 400;
}


`


export const HomeContainer= styled.div`
background-color: whitesmoke;
overflow:hidden;
`


export const MainContainer= styled.div`
background-color: whitesmoke;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 100px;
width: 100%;

`


export const Button = styled.button`

width:150px;
height: 35px;
background-color: crimson;
color: white;
border: none;
cursor: pointer;
margin:10px;
border-radius: 12px;

&:hover{
    opacity: 0.9;
    transform: scale(1.01);
}

`

