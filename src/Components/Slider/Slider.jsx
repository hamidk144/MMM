import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Navigation, Pagination,Autoplay, Mousewheel, Keyboard } from "swiper";



const Slider = () => {
  return (
    <>
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
        modules={[Navigation, Pagination,  Autoplay, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide className="mySwiperSlide"> <img src="https://techengage.com/wp-content/uploads/2018/09/Phones.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide className="mySwiperSlide"><img src="https://fscl01.fonpit.de/userfiles/7640001/image/best-high-end-smartphones/AndroidPIT-Best-High-End-Smartphones-Hero-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className="mySwiperSlide"><img src="https://images.unsplash.com/photo-1573739022854-abceaeb585dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" /></SwiperSlide>
      
        <SwiperSlide className="mySwiperSlide"><img src="https://media.wired.com/photos/61bb761477cdb999ac10fbab/3:2/w_1280%2Cc_limit/Gear-Oppo-Folding-Phone.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default Slider