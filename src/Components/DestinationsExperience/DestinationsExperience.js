import React from 'react'
import Carousel from "../Carousel/Carousel"
import Image1 from "../../Assets/images/destinations-view1.jpg";
import Image2 from "../../Assets/images/destinations-view2.jpg";
import Image3 from "../../Assets/images/destinations-view3.jpg";
import Image4 from "../../Assets/images/destinations-view4.jpg";
import Image5 from "../../Assets/images/destinations-view5.jpg";

const DestinationExperience = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-4 py-40 screen:gap-0 mobile:flex-col mobile:gap-8 mobile:py-0 ">
        <div className="pl-10 w-1/3 px-5 laptop:w-1/2 laptop:px-5 screen:pr-1 mobile:w-full mobile:px-10">
          <span className="text-5xl screen:text-4xl screen:font-semibold mobile:text-3xl ">
            Unforgettable
            <br />
            experiences tailored to you.
          </span>
          <p className="text-3xl pt-10 laptop:text-2xl screen:pt-5 screen:text-3xl mobile:text-2xl overflow:hidden">
            Awaken your adventurous side with
            <br /> experiences you’ll remember for light years.
          </p>
        </div>
        <Carousel
        image1={Image1} alt1="Hotel"
        image2={Image2} alt2="Hotel"
        image3={Image3} alt3="Hotel"
        image4={Image4} alt4="Hotel"
        image5={Image5} alt5="Hotel"
        layout=" w-2/3 rounded-l-xl screen:w-1/2 mobile:w-full mobile:rounded-none"
        />
      </div>
    </>
  )
}

export default DestinationExperience




