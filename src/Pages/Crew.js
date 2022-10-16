import React from "react";
import HeroSubpages from "../Components/HeroSubpages/HeroSubpages";
import Team from "../Components/Team/Team";
import Image from "../Assets/images/crew-hero.jpg";
import ScrollTop from "../Components/ScrollTop/ScrollTop";
import Footer from "../Components/Footer/Footer";

const Crew = () => {
  return (
    <div className="bg-black/40 backdrop-blur-xl">
      <HeroSubpages
        bg="hero crew"
        linetop="The Best Team"
        linemidd="in"
        linebottom="Whole Space"
      />
      <h3 className="flex items-center justify-center font-bold text-7xl text-center py-40 w-full laptop:text-5xl  tablet:text-4xl tablet:py-20 tablet:px-5 ">
        "The strength of the team is each individual member.
        <br /> The strength of each member is the team."
      </h3>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="w-full px-5 mobile:w-full mobile:px-2 ">
          <img
            className="rounded-xl object-cover object-bottom h-[60vh]"
            src={Image}
            alt="crew"
          />
        </div>
        <div className="w-full px-20 flex flex-col gap 2 pb-40 laptop:px-10 screen:pb-20 screen:px-5 tablet:px-2">
          <span className="text-5xl text-center font-bold pt-10 laptop:text-4xl tablet:text-3xl tablet:pt-5 mobile:text-2xl ">
            Individual selection and crew composition
          </span>
          <p className="text-3xl pt-10 text-center screen:text-2xl tablet:text-xl mobile:text-lg tablet:pt-5">
            Evidence linking crew selection, composition, training, cohesion or
            psychosocial adaptation to performance errors is uncertain. Many
            NASA-backed studies regarding spaceflight, as well as space analogs,
            emphasize the need to consider these factors.The research on
            performance errors caused by team factors is ambiguous and
            currently, no systematic attempt has been undertaken to measure
            performance errors due to psychosocial team factors during space
            flight. As a result, evidence does not help identify what is needed
            to reduce the risk of performance errors in space. Ground-based
            evidence demonstrates that decrements in individual and team
            performance are related to the psychosocial characteristics of
            teamwork. Also, there are reasons to believe that ground support
            personnel and crew members experience many of the same basic issues
            regarding teamwork and performance.
          </p>
        </div>
      </div>
      <h1 className="text-6xl text-center screen:text-5xl ">Our Team</h1>
      <div>
        <Team />
      </div>
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default Crew;
