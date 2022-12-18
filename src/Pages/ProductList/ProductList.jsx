import styled from "styled-components";
import Navbar from '../../Components/Navbar/Navbar';
import Products from "../../Components/Products/Products";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Footer from "../../Components/Footer/Footer";
import { Title } from "../../global.styles";
import { Link, useParams } from "react-router-dom";



/* import { mobile } from "../responsive"; */

const Container = styled.div` 
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 30px;
width: 100%;
`;

const TitleContainer= styled.div`
display:flex;
flex-direction: column;
align-items:center;
margin-left: 50px;
margin-top: 30px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
 margin: 0px 30px;
`;

const Filter = styled.div`
  margin: 20px;

`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
 
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  
`;
const Option = styled.option``;

const ProductList = () => {


const {name} = useParams();

  return (

    <>
      <Navbar/>
      
    <Container>
    <TitleContainer>
      
        <Title >Mobile Phones</Title>
        <p style={{color:'crimson', textAlign:"center" }}>online shoping currently not available <br/> <Link to="/contact" style={{color:'#3681e3'}}> please visit our store.</Link></p>
        </TitleContainer>
      {/* <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer> */}


      <Products type={name}/>


    </Container>

    <Container>
      
    </Container>
    
      <NewsLetter/>
      <Footer/>
    </>
  );
};

export default ProductList;