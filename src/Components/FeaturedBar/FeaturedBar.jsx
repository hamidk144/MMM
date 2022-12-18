import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./FeaturedBar.css";
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from "swiper";
import styled from "styled-components";
import { MainContainer, Title } from "../../global.styles";
import { FeaturedContainer } from "./FeaturedBar.style";
import Product from "../Product/Product";
import { featuredProducts } from "../../data";
import SaleCard from "../SaleCard/SaleCard";




const FeaturedBar = ({ title, variation }) => {
  return (
    <>

      <MainContainer style={   variation==='about'? {marginTop:"30px"} : { marginTop: '150px' }   } >

        <Title > <span >Our </span>{title} </Title>

        <FeaturedContainer>
          {featuredProducts.map((data, key) => {

            return (
              <div key={data.id}>
                <Product type="homeproducts" data={data} />
              </div>
            )
          })}
        </FeaturedContainer>

      </MainContainer>

    <div>

        <SaleCard />
    </div>
      
    </>
  )
}

export default FeaturedBar