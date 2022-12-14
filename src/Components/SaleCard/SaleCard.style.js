import styled from "styled-components";

export const SaleContainer= styled.div`

width: 75%;
height: 40vh;
display: flex;
background-color: #efefef; 
border-bottom: 3px solid #facaa7;;
padding: 40px;

`

export const SaleLeft = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex: 1;

`


export const SaleRight = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 50%;
flex: 1;


`

export const ImgContainer = styled.div`

width: 300px;
height: 300px;
border-radius: 50%;
background-color: lightcoral;
display: flex;
align-items: center;
justify-content: center;


img{
    height: 400px;
    object-fit: cover;
}

`