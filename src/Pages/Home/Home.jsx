import React from 'react'
import Categories from '../../Components/Categories/Categories';
import FeaturedBar from '../../Components/FeaturedBar/FeaturedBar';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Newsletter from '../../Components/NewsLetter/NewsLetter';
import SaleCard from '../../Components/SaleCard/SaleCard';
import Slider from '../../Components/Slider/Slider';
import { HomeContainer } from '../../global.styles';

const Home = () => {
  return (

    <HomeContainer>

   

        <Navbar/>
        <Slider/>
        <Categories/>
        <FeaturedBar title= 'Featured Products'/>
        <Newsletter/>
        <Footer/>
      

    
    </HomeContainer>
  )
}

export default Home