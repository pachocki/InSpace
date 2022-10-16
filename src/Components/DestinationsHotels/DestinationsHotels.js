import React from "react";
import ServicesCard from "../Card/Card";
import Image from "../../Assets/images/hotel-europa.webp";
import Image1 from "../../Assets/images/hotel-titanium.webp";
import Image2 from "../../Assets/images/hotel-forest.webp";
import Image3 from "../../Assets/images/hotel-moon.webp";

const DestinationsHotels = () => {
  return (
    <div>
      <div className="pt-40 pl-10 laptop:pt-30 tablet:pt-25 mobile:px-10 mobile:pt-20">
        <div className="w-1/2 laptop:w-2/3 tablet:w-full tablet:pr-20 mobile:w-full mobile:pr-0">
          <span className="text-6xl screen:text-5xl tablet:text-4xl tablet:font-bold mobile:text-3xl ">
            Wake up inspired
          </span>
          <p className="text-4xl pt-10 screen:text-3xl screen:pt-5 tablet:text-2xl mobile:text-xl ">
            Discover astonishing views of the rugged natural galaxy landscape
            from your private suite.Each hotel in our offer is well-equipped and
            has the best equipment we have on earth.
          </p>
        </div>
      </div>
      <div className="flex gap-2 justify-around  align-items-center py-20 laptop:px-2 mobile:flex-col mobile:items-center mobile:w-full mobile:py-5">
        <div className="flex flex-col gap-2">
          <span className="text-2xl relative line z-100 tablet:text-xl">
            01
          </span>
          <ServicesCard
            image={Image}
            alt="hotel"
            layout="h-[400px] mobile:h-[400px]"
            title="Hotel Europa"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-2xl relative line z-100 tablet:text-xl">
            02
          </span>
          <ServicesCard
            image={Image1}
            alt="hotel"
            layout="h-[400px]  mobile:h-[400]"
            title="Hotel Titanium"
          />
        </div>
        <div className="flex flex-col gap-2 z-100 tablet:text-xl">
          <span className="text-2xl relative line">03</span>
          <ServicesCard
            image={Image2}
            alt="hotel"
            layout="h-[400px] mobile:h-[400]"
            title="Hotel Forest"
          />
        </div>
        <div className="flex flex-col gap-2 z-100">
          <span className="text-2xl  relative line tablet:text-xl">04</span>
          <ServicesCard
            image={Image3}
            alt="hotel"
            layout="h-[400px] mobile:h-[400]"
            title="Hotel Moon"
          />
        </div>
      </div>
    </div>
  );
};

export default DestinationsHotels;
