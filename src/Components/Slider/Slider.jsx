import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import cover1 from "../../assets/covers/cover1.png";
import cover2 from "../../assets/covers/cover2.png";
import cover3 from "../../assets/covers/cover3.png";
import cover4 from "../../assets/covers/cover4.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

// import required modules
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from "swiper";

const Slider = () => {
  return (
    <Swiper
      /*  cssMode={true} */
      navigation={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      mousewheel={false}
      keyboard={true}
      modules={[Navigation, Pagination, Autoplay, Mousewheel, Keyboard]}
      className="mySwiper"
    >


     
  
      <SwiperSlide className="mySwiperSlide">
      <span className="hero-text">
      One-stop shop  <br /> for all your smartphones"
        </span>{" "}
        <img
          src={cover2}
          alt=""
        
        />
      </SwiperSlide>
      
      <SwiperSlide className="mySwiperSlide">
      <span className="hero-text">
      Trusted by Customers  <br /> for over 10 years"
        </span>{" "}
        <img
          src={cover1}
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide className="mySwiperSlide">
        {" "}
        <span className="hero-text">
          Best smartphone  <br />repair lab in the Town"
        </span>{" "}
        <img
          src={cover3}
          alt=""
        />{" "}
      </SwiperSlide>

    

      <SwiperSlide className="mySwiperSlide">
      <span className="hero-text">
      High-quality repair parts  <br />available"
        </span>{" "}
     
        <img
          src={cover4}
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
