import styled from "styled-components";

export const CategoriesContainer= styled.div`

width: 75%;
height: 60vh;
display: flex;
flex-wrap: wrap;
margin-top: 30px;
background-color: gray;
box-shadow: 1px 1px 7px 1px rgba(0,0,0,0.05);
-webkit-box-shadow: 1px 1px 7px 1px rgba(0,0,0,0.05);
-moz-box-shadow: 1px 1px 7px 1px rgba(0,0,0,0.05);
`

export const AdContainer= styled.div`

width: 75%;
height: 20vh;
display: flex;
margin-top: 20px;
gap: 40px;
`

export const CategoryBox= styled.div`

width: calc(100% / 3);
height: calc(100% / 1.9);
border: 0.001px solid #255abd1a;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

&:hover{
    background-color:#f7f9fd;
    
}
`
export const CategoryBoxMain= styled.div`

width: calc(100% / 1);
height: calc(100% / 2.1);
border: 0.001px solid #255abd1a;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
/* background-image: url('https://phone-service.de/images/slide-2-960px.jpg.pagespeed.ce.UpRmNbMs5u.jpg'); */
/* background-repeat: no-repeat;
background-size: cover;
background-blend-mode: */

background-color: white;


&:hover{
    background-color:#f7f9fd;
}

`

export const Adcard= styled.div`

width: calc(100% / 3);
height: calc(100% / 1);
background-color: ${({color})=> color};
display: flex;
justify-content: center;
align-items: center;
color: white;


`

