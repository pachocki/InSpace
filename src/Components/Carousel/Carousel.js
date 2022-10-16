import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const Carousel = (props) => {
  return (
    <div className={"m-w-0 overflow-hidden" + props.layout}>
          <Swiper
            spaceBetween={0}
            grabCursor={true}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}  
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper2 min-w-[0] h-[80vh] bg-black "
          >
            <SwiperSlide>
              <img src={props.image1} alt={props.alt1} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={props.image2} alt={props.alt2} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={props.image3} alt={props.alt3} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={props.image4} alt={props.alt4} />
            </SwiperSlide>
            <SwiperSlide>
            <img src={props.image5} alt={props.alt5} />
            </SwiperSlide>
          </Swiper>
        </div>
  )
}

export default Carousel
