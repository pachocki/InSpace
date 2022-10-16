import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import data from "../../Data/data.json";


import { Pagination, Navigation } from "swiper";

const Team = () => {
  const crew = data.crew;
  return (
    <div className=" py-20">
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
        className="mySwiper2 min-w-[0] "
      >
        {crew.map((crew , id) => (
          <SwiperSlide key={id}>
            <div className="flex items-center justify-between mobile:flex-col-reverse ">
              <div className="flex flex-col  w-1/2 pl-10 screen:pl-5 mobile:w-full mobile:px-5">
                <span className="text-6xl pt-5 laptop:text-5xl screen:text-4xl">{crew.name}</span>
                <span className="text-2xl py-5 screen:text-xl">{crew.role}</span>
                <p className="text-4xl laptop:text-3xl screen:text-2xl tablet:text-xl">{crew.bio}</p>
              </div>
              <div className="pl-5">
                <img className="mobile:h-[40vh]" src={crew.images.png} alt="crew.role" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;
