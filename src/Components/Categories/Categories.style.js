import styled from "styled-components";
import { media } from "../../globalStyles";

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

${media.mobile}{
    height: 34vh;
    width: 95%;

    .categories_icons{
        width:25px;
        margin:0px;
    }
}
`

export const AdContainer= styled.div`

width: 75%;
height: 20vh;
display: flex;
margin-top: 20px;
gap: 40px;

${media.mobile}{
    gap:5px;
    margin-top:10px;
    width:95%;
    height:10vh;
    font-size:14px;
    font-weight:400;
}
`

export const CategoryBox= styled.label`

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

${media.mobile}{

    align-items:center;

    .navlinkc2{
    display:flex;
    flex-direction: column !important;
    font-size: 12px;
    align-items: center;
    justify-content:center;
}
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
${media.mobile}{
    height: calc (100% /3)
}


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

${media.mobile}{
    font-weight:400;
    font-size:12px;
    flex-direction: column;
    justify-content: center;
align-items: center;
text-align:center;
}


`

