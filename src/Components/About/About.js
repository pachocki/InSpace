import React from "react";
import Image from "../../Assets/images/Rocket-Transparent.png";
const About = () => {
  return (
    <div className="big-screen:w-[90%] flex justify-between pt-40 items-center tablet:gap-5 tablet:pt-20 gap-10  m-auto flex-direction big-screen:">
      <div className="big-screen:w-1/2 laptop:w-1/2 screen:w-1/2 tablet:w-[100%]">
        <img src={Image} alt="rocket" />
      </div>
      <div className="big-screen:w-1/2 laptop:w-1/2   tablet:gap-10 tablet:w-[90%] about-des">
        <h2 className="big-screen:text-6xl laptop:text-5xl screen:text-5xl tablet:text-4xl mobile:pb-10 pb-10">
          About Us
        </h2>
        <p className="big-screen:text-3xl  laptop:text-2xl screen:w-[98%] tablet:text-xl mobile:text-md pb-8 ">
          InSpace designs, manufactures and launches the world's most advanced
          rockets and spacecraft. The company was founded in 2022 by Gagarin to
          revolutionize space transportation, with the ultimate goal of making
          life multiplanetary. InSpace has gained worldwide attention for a
          series of historic milestones.
        </p>
        <div className="tablet:flex tablet:items-center mobile:justify-center">
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
