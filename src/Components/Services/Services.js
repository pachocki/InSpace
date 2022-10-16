import React from "react";
import Image1 from "../../Assets/images/rocket.webp";
import Image2 from "../../Assets/images/telesko.webp";
import Image3 from "../../Assets/images/rover.webp";
import Image4 from "../../Assets/images/station.webp";
import ServicesCard from "../Card/Card";

const Services = (props) => {
  return (
    <div className="flex flex-col gap-10 tablet:pt-20 mobile:pb-20 pt-40 px-8  items-center">
      <div className="flex align-center justify-center ">
        <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-4xl pb-10 ">
          Services
        </h1>
      </div>
      <div className="max-w-tablet:flex-col max-w-tablet:align-center  md:flex md:align-center md:justify-around screen:gap-2 gap-4 mb-4 ">
        <ServicesCard
          image={Image1}
          name="Space Rocket"
          title="Space Rocket"
          text="Our company produces modern space stations with full equipment. 
        We can boast of two working space stations."
          button="Read More ➜"
        />
        <ServicesCard
          image={Image2}
          name="Telescope"
          title="Telescope"
          text="Our company produces the most modern telescopes in the world. Thanks to them you will see what others cannot."
          button="Read More ➜"
        />
        <ServicesCard
          image={Image4}
          name="Space Station"
          title="Space Station"
          text="Our company produces modern space stations with full equipment. 
          We can boast of two working space stations."
          button="Read More ➜"
        />
        <ServicesCard
          image={Image3}
          name="Rover Vehicles"
          title="Rover Vehicles"
          text="We produce modern space rovers that are adapted to exploring planets in space. Their main task is to collect rock."
          button="Read More ➜"
        />
      </div>
    </div>
  );
};

export default Services;
