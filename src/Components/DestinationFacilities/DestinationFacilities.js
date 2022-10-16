import React from "react";
import Carousel from "../Carousel/Carousel";
import Image from "../../Assets/images/spa1.jpg";
import Image1 from "../../Assets/images/spa2.jpg";
import Image2 from "../../Assets/images/restaurant2.jpg";
import Image3 from "../../Assets/images/restaurant.webp";

const DestinationFacilities = () => {
  return (
    <div>
      <div className="flex gap-4 justify-between px-10 screen:gap-2 tablet:flex-col tablet:w-full mobile:pt-10">
        <span className="text-6xl w-1/2 screen:text-5xl tablet:w-full tablet:text-4xl mobile:text-3xl mobile:text-bold">
          Space-class
          <br />
          facilities
        </span>
        <p className="text-4xl w-1/2 screen:text-3xl  tablet:w-full tablet:pt-5 tablet:text-3xl mobile:text-xl">
          Our facilities are strictly for hotel guests – giving you ultimate
          privacy. Just imagine yourself in breathtaking views from our
          sensational Capsule followed by a relaxing spell in the sauna or start
          the day in ours spa from another planet.
        </p>
      </div>
      <Carousel
        layout="w-full pt-20 mobile:pt-10 h-1/2"
        image1={Image2}
        alt1="facilities"
        image2={Image1}
        alt2="facilities"
        image3={Image3}
        alt3="facilities"
        image4={Image}
        alt4="facilities"
        image5={Image3}
        alt5="facilities"
      />
    </div>
  );
};

export default DestinationFacilities;
