import { useEffect, useState } from "react";
import styled from "styled-components";
import { mobilephones, mobileAcc, repairAcc } from "../../data";
import { media } from "../../globalStyles";
import Product from "../Product/Product";


const Container = styled.div`
margin-top: 50px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    ${media.mobile}{
      width:100vw;
      margin-top:20px;
      gap:10px;
    }
`;

const Products = ({type}) => {
  const [productsData, setProductsData]= useState([]);
  console.log(productsData);

  console.log(type);

  useEffect(()=>{
    if(type==="mobilePhones"){
      setProductsData(mobilephones);
    }else if(type==="mobileAcc"){
      setProductsData(mobileAcc);
    }else if(type==="repairAcc"){
      setProductsData(repairAcc);
    }
    
  },[type])


  return (
    <Container>
      {productsData.map((data) => (
        <Product data={data} />
      ))}
    </Container>
  );
};

export default Products;