import styled from 'styled-components'



export const NavTop = styled.div`
height:35px ;
/* background-image: linear-gradient( to right, #f79650d9  ,rgb(186, 52, 70) , rgb(203, 45, 65) ); */
background-color:#1F4690;
border-bottom: 0.1px solid rgba(76, 17, 25, 0.349);
display: flex;
align-items: center;
justify-content: center;
z-index: 90;

`


export const NavMiddle = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color:  rgba(255, 255, 255, 0.975);
border-bottom: 0.1px solid rgba(76, 17, 25, 0.349);
z-index: 100;
height: 70px;


.active{
color: crimson !important;
}
.mainlink{
text-decoration: none !important;
color: black; 
}
transition: transform 1s ease;



position: sticky !important;
top:0px !important;
`




export const WrapperTop = styled.div`
width: 75%;
height: 100%;
display: flex ;
justify-content: flex-end;
align-items: center;

`


export const WrapperMiddle = styled.div`
width: 75%;
height: 100%;
display: flex ;
align-items: center;
`



export const NavItems = styled.h3`

&:hover{
    transform: scale(0.98);
    opacity: 0.7;
    color: crimson !important;
    
}

font-size: ${ ({variant})=>{return(variant==='mainColor'? '16px' : '14px')} };
margin: 0px 10px;
font-weight: ${ ({variant})=>{return(variant==='mainColor'? 600 : 500)} };
color: ${ ({variant})=>{return(variant==='mainColor'? 'black' : '#fff')} };
cursor: pointer;
transition: transform 0.15s ease;



.link{
    text-decoration: none !important;
    color: ${ ({variant})=>{return(variant==='mainColor'? 'black' : '#fff')} };
  
    
}






`

export const LogoContainer = styled.h1`
color: crimson;
font-weight: 600;
font-size: 35px;
flex: 1;
margin-top: 10px;


&:hover{
    transform: scale(0.995);
    opacity: 0.85;
    
}

img{

    width: 70px;

}

`

export const MiddleContent = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex: 3;
`

export const Searchcontainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
height: 37px;
width: 330px;
border: 0.05px solid rgba(203, 45, 66, 0.542);
display: flex;



`

export const Input = styled.input`

outline: none;
border: none;
background-color: transparent;
width: 260px;
color: crimson;
font-size: 14px;
font-weight: 400;
`

export const CartContainer = styled.div`

display: flex;
align-items: center;
width: 80px;
justify-content: space-between;

`
