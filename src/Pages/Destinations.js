import React from "react";
import HeroSubpages from "../Components/HeroSubpages/HeroSubpages";
import Image from "../Assets/images/astronaut-forest.webp";
import DestinationsExperience from "../Components/DestinationsExperience/DestinationsExperience";
import DestinationsHotels from "../Components/DestinationsHotels/DestinationsHotels";
import DestinationFacilities from "../Components/DestinationFacilities/DestinationFacilities";
import DestinationSection from "../Components/Destinations Section/DestinationSection";
import ScrollTop from "../Components/ScrollTop/ScrollTop";
import Footer from "../Components/Footer/Footer";
const Destinations = (props) => {
  return (
    <div className=" bg-black/40 backdrop-blur-xl">
      <HeroSubpages
        bg="hero destinations"
        linetop="This is Your"
        linemidd="Dream"
        linebottom="Destinations"
      />
      <div className="flex justify-center  gap-4 py-40 w-full laptop:py-20 tablet:flex-col tablet:py-10 tablet:items-center mobile:py-10 mobile:gap-8">
        <div className="w-1/3 pl-10 laptop:w-1/2 tablet:w-full tablet:px-10 ">
          <h2 className="big-screen:text-5xl big-screen:pt-20 laptop:text-4xl laptop:text-bold mobile:text-3xl screen:pt-10 mobile:pt-5 ">
            Discover
            <br />
            Unlimited Beauty
            <br />
          </h2>
          <p className="big-screen:text-2xl pt-5 screen:text-xl tablet:w-full mobile:text-lg">
            <strong>
              Explore the infinity of the cosmos and the infinite beauty of the
              universe
            </strong>
            .Since time immemorial humans have been fascinated by the universe,
            trying to discover its origins and determine its nature, questioning
            man’s role, place and possibilities within it. Incredible scientific
            and technological advances have allowed humans to explore the
            vastness of the universe, continuously improving our understanding
            and knowledge of the cosmos.
          </p>
        </div>
        <div className="w-2/3 laptop:w-1/2 screen:object-cover tablet:w-full mobile:pt-4">
          <img
            className="w-full h-full rounded-l-xl screen:object-cover mobile:h-[50vh]"
            src={Image}
            alt="view"
          />
        </div>
      </div>
      <h3
        className="big-screen:text-6xl big-screen:py-20 font-bold pt-5 max-w-[1200px] m-auto text-center laptop:text-5xl  laptop:px-20 screen:text-4xl screen:py-5 mobile:px-5
      mobile:text-3xl "
      >
        Thanks to our company, you can experience it up close. Our company is
        the first to organize space tours and we are known for giving amazing
        experiences that you will never forget for the rest of your life.
      </h3>
      <DestinationsHotels />
      <DestinationsExperience />
      <DestinationFacilities />
      <DestinationSection />
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default Destinations;
