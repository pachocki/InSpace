import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import data from "../../Data/data.json";
import ServicesCard from "../Card/Card";

const destinations = data.destinations;

const DestinationSection = (props) => {
  return (
    <div className="pt-10 pb-20">
      <h1 className="big-screen:text-6xl laptop:text-5xl tablet:text-4xl text-center">
        Destinations
      </h1>
      <div className="flex gap-0 justify-center items-center  pt-20">
        <Swiper
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {destinations.map((destination,index) => (
            <SwiperSlide key={index}>
              <ServicesCard
                layout="py-5 px-5 w-full h-full object-contain mobile:h-[30vh] cursor-grab"
                image={destination.images.webp}
                title={destination.name}
                text={destination.description}
                more="Travel:"
                desc={destination.travel}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DestinationSection;
